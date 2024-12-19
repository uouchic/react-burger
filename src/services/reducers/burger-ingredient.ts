import { SELECT_BURGER_INGREDIENT, DELETE_BURGER_INGREDIENT } from '../actions/burger-ingredient';

import type { TBurgerIngredientActions } from '../actions/burger-ingredient';

type TSelectBurgerState = {
    name: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    image: string,
  };

const initialState: TSelectBurgerState = {
    name: '',
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    image: '',
}

export const selectBurgerIngredientReducer = (state = initialState, action: TBurgerIngredientActions): TSelectBurgerState => {
    switch (action.type) {
        case SELECT_BURGER_INGREDIENT: {
            return {
                name: action.name,
                proteins: action.proteins,                
                fat: action.fat,
                carbohydrates: action.carbohydrates,
                calories: action.calories,
                image: action.image,
            };
        }
        case DELETE_BURGER_INGREDIENT: {
            return {
                name: '',
                proteins: 0,                
                fat: 0,
                carbohydrates: 0,
                calories: 0,
                image: '',
            };
        }
        default: {
            return state;
        }
    }
};