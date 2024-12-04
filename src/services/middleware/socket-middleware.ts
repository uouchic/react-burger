import type { Middleware, MiddlewareAPI } from 'redux'; 

import { store } from '../../index';


import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import type { TWsOrdersActions } from '../actions/socket-orders';

export type AppDispatch = ThunkDispatch<RootState, unknown, TWsOrdersActions>;
export type RootState = ReturnType<typeof store.getState>;


export const socketMiddleware = (wsUrl: string): Middleware => {
  //@ts-expect-error  
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TWsOrdersActions) => {
      const { dispatch, getState } = store;
      const { type } = action;

      if (type === 'WS_CONNECTION_START') {
        
        
        socket = new WebSocket(wsUrl);
        //console.log(socket)
      }
      if (socket) {

      
        socket.onmessage = event => {
          const { data } = event;

          try {
            const parsedData = JSON.parse(data);
            //console.log(parsedData.success)
            dispatch({ type: 'WS_GET_ORDERS', payload: parsedData });
          } catch (err) {
            console.log(err)
          }
        };
        
      }

      next(action);
    };
  });
};