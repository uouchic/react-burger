import { orderBurger } from './burger-order';
import { initialState } from './burger-order';

import {
    GET_BURGER_ORDER,
    CLOSE_BURGER_ORDER,
    LOADING_BURGER_ORDER,
} from '../actions/burger-order';


describe("burger ingredients reducer", () => {

    it("initial state", () => {
        expect(orderBurger(undefined, {})).toEqual(initialState)
    })

    it("get burger order", () => {
        expect(orderBurger(initialState, {
            type: GET_BURGER_ORDER,
            orderNumber: 9532
        })).toEqual({ ...initialState, orderNumber: 9532 })
    })


    it("close burger order", () => {
        expect(orderBurger({
            orderNumber: 9532,
            orderLoading: true
        }, {
            type: CLOSE_BURGER_ORDER
        })).toEqual({ orderNumber: '', orderLoading: true })
    })


    it("loading burger order", () => {
        expect(orderBurger(initialState, {
            type: LOADING_BURGER_ORDER,
            loading: true
        })).toEqual({ ...initialState, orderLoading: true })
    })


})