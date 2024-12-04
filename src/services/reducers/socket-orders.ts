import { WS_GET_ORDERS } from '../actions/socket-orders';

import type { TWsOrdersActions } from '../actions/socket-orders';


const initialState = {
    total: '',
    totalToday: '',
    orders: [],
}

export const socketOrdersReducer = (state = initialState, action: TWsOrdersActions) => {
    switch (action.type) {
        case WS_GET_ORDERS: {
            return {
                total: action.payload.total,
                totalToday: action.payload.totalToday,
                orders: action.payload.orders,
            };
        }
        default: {
            return state;
        }
    }
};