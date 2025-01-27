import { getOrderByNumber } from './get-order-by-number';
import { initialState } from './get-order-by-number';


import {
    GET_ORDER_BY_NUMBER,
} from '../actions/get-order-by-number';




describe("get order by number reducer", () => {

    it("initial state", () => {
        expect(getOrderByNumber(undefined, {})).toEqual(initialState)
    })


    it("get border by number", () => {

        const orderByNumber = {
            _id: "6473c91b8a4b62001c84260b",
            ingredients: [
                "643d69a5c3f7b9001cfa093c",
                "643d69a5c3f7b9001cfa0943",
                "643d69a5c3f7b9001cfa093c"
            ],
            owner: "646513758a4b62001c8396b6",
            status: "done",
            name: "Space краторный бургер",
            createdAt: "2023-05-28T21:35:23.262Z",
            updatedAt: "2023-05-28T21:35:23.359Z",
            number: 5937,
            __v: 0
        }

        expect(getOrderByNumber(initialState, {
            type: GET_ORDER_BY_NUMBER,
            orders: orderByNumber
        })).toEqual({ orders: orderByNumber })
    })



})