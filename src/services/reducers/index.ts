import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients'
import { selectBurgerIngredientReducer } from './burger-ingredient'
import { burgerElements } from './burger-element'
import { orderBurger } from './burger-order'
import { userRegisterReducer } from './userAuth'
import { socketOrdersReducer } from './socket-orders'
import { userSocketOrdersReducer } from './user-socket-orders'
import { getOrderByNumber } from './get-order-by-number'


export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    selectBurgerIngredient: selectBurgerIngredientReducer,
    burgerElements: burgerElements,
    orderBurger: orderBurger,
    userRegister: userRegisterReducer,
    socketOrdersReducer: socketOrdersReducer,
    userSocketOrdersReducer: userSocketOrdersReducer,
    getOrderByNumber: getOrderByNumber
  });