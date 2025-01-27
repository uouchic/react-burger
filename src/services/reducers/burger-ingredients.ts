import {
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_BURGER_INGREDIENTS_FAILED
} from '../actions/burger-ingredients';

import type { TBurgerIngredients } from '../actions/burger-ingredients';

import type { TIngridientProps } from '../../utils/types';


type TBurgerIngredientsState = {
    
    allBurgerIngredients: TIngridientProps
    burgerIngredientsRequest: boolean,
    burgerIngredientsFailed: boolean,
  };



export const initialState: TBurgerIngredientsState = {
//@ts-ignore
    allBurgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsFailed: false,

};

export const burgerIngredientsReducer = (state = initialState, action: TBurgerIngredients): TBurgerIngredientsState => {

    switch (action.type) {

        case GET_BURGER_INGREDIENTS_REQUEST: {
            return {
                ...state,
                burgerIngredientsRequest: true
            };
        }

        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
              ...state,                             
              allBurgerIngredients: action.burgerIngredients,
              burgerIngredientsRequest: false,
              burgerIngredientsFailed: false,
            };
        }

        case GET_BURGER_INGREDIENTS_FAILED: {
            return {
                ...state,
                burgerIngredientsFailed: true,
                burgerIngredientsRequest: false
            };
        }

        default: {
            return state;
        }
    }
};