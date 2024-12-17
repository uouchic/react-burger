import type { Middleware, MiddlewareAPI } from 'redux';

import { store } from '../../index';

import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import type { TWsOrdersActions } from '../actions/socket-orders';

import { refreshToken } from '../../utils/api';



export type AppDispatch = ThunkDispatch<RootState, unknown, TWsOrdersActions>;
export type RootState = ReturnType<typeof store.getState>;

//@ts-ignore
export const socketMiddleware = (wsActions): Middleware => {
  //@ts-expect-error
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWsOrdersActions) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, onMessage } = wsActions;

      if (type === wsInit) {
        //@ts-ignore
        socket = new WebSocket(action.payload);
      
        //console.log(socket)
      }
      if (socket) {
        socket.onmessage = (event) => {
          const { data } = event;

          try {
            const parsedData = JSON.parse(data);

            if (parsedData.messege === 'Invalid or missing token') {
              refreshToken()
                .then((refreshData) => {
                  //@ts-ignore
                  const wssUrl = new URL(action.payload);
                  wssUrl.searchParams.set(
                    'token',
                    refreshData.accessToken.replace('Bearer ', '')
                  );
                  dispatch({
                    type: wsInit,
                  });
                })

                .catch((err) => {
                  console.log(err);
                });
            }

            //console.log(parsedData.success)

            dispatch({ type: onMessage, payload: parsedData });
          } catch (err) {
            console.log(err);
          }
        };
      }

      next(action);
    };
  };
};
