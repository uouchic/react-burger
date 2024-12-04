import type { Middleware, MiddlewareAPI } from 'redux';

import { store } from '../../index';

import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import type { TWsUserOrdersActions } from '../actions/user-socket-orders';

import { WS_USER_CONNECTION_START } from '../actions/user-socket-orders';

import { refreshToken } from '../../utils/api';

export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TWsUserOrdersActions
>;
export type RootState = ReturnType<typeof store.getState>;

export const userSocketMiddleware = (wsUrl: string): Middleware => {
  //@ts-ignore
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socketUser: WebSocket | null = null;

    return (next) => (action: TWsUserOrdersActions) => {
      const { dispatch, getState } = store;
      const { type } = action;

      if (type === 'WS_USER_CONNECTION_START') {
        const accessToken = localStorage.getItem('accessToken');

        //console.log(accessToken);

        if (accessToken) {
          socketUser = new WebSocket(
            `${wsUrl}?token=${accessToken.replace('Bearer ', '')}`
          );
        }

        //console.log(socketUser)
      }
      if (socketUser) {
        socketUser.onmessage = (event) => {
          const { data } = event;
          //console.log(data)

          try {
            const parsedDataUser = JSON.parse(data);

            if (parsedDataUser.messege === 'Invalid or missing token') {
              refreshToken()
                .then((refreshData) => {
                  const wssUrl = new URL(wsUrl);
                  wssUrl.searchParams.set(
                    'token',
                    refreshData.accessToken.replace('Bearer ', '')
                  );
                  dispatch({
                    type: WS_USER_CONNECTION_START,
                  });
                })

                .catch((err) => {
                  console.log(err);
                });
            }

            //console.log(parsedDataUser)
            dispatch({ type: 'WS_USER_GET_ORDERS', payload: parsedDataUser });
          } catch (err) {
            console.log(err);
          }
        };
      }

      next(action);
    };
  };
};
