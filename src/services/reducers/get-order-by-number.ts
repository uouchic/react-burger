import {
    GET_ORDER_BY_NUMBER,
} from '../actions/get-order-by-number';

import type { IGetOrderByNumberAction } from '../actions/get-order-by-number';


const initialState = {
    orders: [],
};

export const getOrderByNumber = (state = initialState, action: IGetOrderByNumberAction) => {

    switch (action.type) {

        case GET_ORDER_BY_NUMBER: {
            return {
                orders: action.orders,
            };
        }

        default: {
            return state;
        }
    }
};