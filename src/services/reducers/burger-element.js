import {
    ADD_BURGER_ELEMENT,
    DEL_BURGER_ELEMENT,
    ADD_BUN_ELEMENT,
    SORT_BURGER_ELEMENT
} from '../actions/burger-element';

const initialState = {
    bun: {},
    burgerElement: [],
}

export const burgerElements = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER_ELEMENT: {
            return {
                ...state,
                burgerElement: [
                    ...state.burgerElement,
                    action.burgerElement,

                ]

            };
        }
        case DEL_BURGER_ELEMENT: {
            return {
                ...state,
                burgerElement: [
                    ...state.burgerElement.filter(element => element.namber !== action.id),
                ]

            };
        }
        case ADD_BUN_ELEMENT: {
            return {
                ...state,
                bun: action.bun

            };
        }
        case SORT_BURGER_ELEMENT: {
            return {
                ...state,
                burgerElement: action.newCards
            };
        }
        default: {
            return state;
        }
    }
};