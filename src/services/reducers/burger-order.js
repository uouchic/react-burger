import {
    GET_BURGER_ORDER,
    CLOSE_BURGER_ORDER,
} from '../actions/burger-order';


const initialState = {

    orderNumber: '',


};

export const orderBurger = (state = initialState, action) => {

    switch (action.type) {

        case GET_BURGER_ORDER: {
            return {
                orderNumber: action.orderNumber,
            };
        }
        case CLOSE_BURGER_ORDER: {
            return {
                orderNumber: null,
            };
        }
        default: {
            return state;
        }
    }
};