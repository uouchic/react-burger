import { WS_USER_GET_ORDERS, WS_USER_RESET_ORDERS } from '../actions/user-socket-orders';

import type { TWsUserOrdersActions } from '../actions/user-socket-orders';

import type { TOrder } from '../../utils/types';



type TUserSocketOrdersState = {
    
    total: string,
    totalToday: string,
    ordersUser: TOrder[],
  };

export const initialState: TUserSocketOrdersState = {
    total: '',
    totalToday: '',
    ordersUser: [],
}

export const userSocketOrdersReducer = (state = initialState, action: TWsUserOrdersActions): TUserSocketOrdersState => {
    switch (action.type) {
        case WS_USER_GET_ORDERS: {
            return {
                total: action.payload.total,
                totalToday: action.payload.totalToday,
                ordersUser: action.payload.orders,
            };
        }
        case WS_USER_RESET_ORDERS: {
            return {
                total: '',
                totalToday: '',
                ordersUser: [],
            };
        }
        default: {
            return state;
        }
    }
};