import {
    GET_BURGER_ORDER,
    CLOSE_BURGER_ORDER,
    LOADING_BURGER_ORDER,
} from '../actions/burger-order';


const initialState = {

    orderNumber: '',
    orderLoading: false,


};

export const orderBurger = (state = initialState, action) => {

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
                orderNumber: null,
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