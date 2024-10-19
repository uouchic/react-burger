import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients'
import { selectBurgerIngredientReducer } from './burger-ingredient'
import { burgerElements } from './burger-element'
import { orderBurger } from './burger-order'

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    selectBurgerIngredient: selectBurgerIngredientReducer,
    burgerElements: burgerElements,
    orderBurger: orderBurger,
  });