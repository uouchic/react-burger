import { SELECT_BURGER_INGREDIENT, DELETE_BURGER_INGREDIENT } from '../actions/burger-ingredient';

const initialState = {
    name: '',
    proteins: null,
    fat: null,
    carbohydrates: null,
    calories: null,
    image: '',
}

export const selectBurgerIngredientReducer = (state = initialState, action) => {
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
                proteins: '',                
                fat: '',
                carbohydrates: '',
                calories: '',
                image: '',
            };
        }
        default: {
            return state;
        }
    }
};