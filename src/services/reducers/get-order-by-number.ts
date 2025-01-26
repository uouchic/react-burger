import {
    GET_ORDER_BY_NUMBER,
} from '../actions/get-order-by-number';



import type { IGetOrderByNumberAction } from '../actions/get-order-by-number';

import type { TOrder } from '../../utils/types';




type TOrderByNumberState = {
    
    orders: TOrder[],
  };


export const initialState: TOrderByNumberState = {
    orders: [],
};

export const getOrderByNumber = (state = initialState, action: IGetOrderByNumberAction): TOrderByNumberState => {

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