import {
    GET_BURGER_ORDER,
    CLOSE_BURGER_ORDER,
    LOADING_BURGER_ORDER,
} from '../actions/burger-order';

import type { TBurgerOrder } from '../actions/burger-order';



type TorderBurgerState = {
    orderNumber: number | string,
    orderLoading: boolean,
  };


export const initialState: TorderBurgerState = {

    orderNumber: '',
    orderLoading: false,


};

export const orderBurger = (state = initialState, action: TBurgerOrder): TorderBurgerState => {

    switch (action.type) {

        case GET_BURGER_ORDER: {
            return {
                ...state,
                orderNumber: action.orderNumber,
            };
        }
        case CLOSE_BURGER_ORDER: {
            return {
                ...state,
                orderNumber: '',
            };
        }
        case LOADING_BURGER_ORDER: {
            return {
                ...state,
                orderLoading: action.loading,
            };
        }
        default: {
            return state;
        }
    }
};