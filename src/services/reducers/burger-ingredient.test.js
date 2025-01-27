import { selectBurgerIngredientReducer } from './burger-ingredient';
import { initialState } from './burger-ingredient';

import { SELECT_BURGER_INGREDIENT, DELETE_BURGER_INGREDIENT } from '../actions/burger-ingredient';

describe("burger ingredients reducer", () => {

    it("initial state", () => {
        expect(selectBurgerIngredientReducer(undefined, {})).toEqual(initialState)
    })

    it("select burger ingredient", () => {

        const burgerElement = {
            name: "Краторная булка N-200i",
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
        }
        
        expect(selectBurgerIngredientReducer(initialState, {
            type: SELECT_BURGER_INGREDIENT,
            name: "Краторная булка N-200i",
            proteins: 80,
            fat: 24,
            carbohydrates: 53,
            calories: 420,
            image: "https://code.s3.yandex.net/react/code/bun-02.png",
        })).toEqual(burgerElement)
    })

    it("delete burger ingredient", () => {
        expect(selectBurgerIngredientReducer(initialState, {
            type: DELETE_BURGER_INGREDIENT,
        })).toEqual(initialState)
    })


})