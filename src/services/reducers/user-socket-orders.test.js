import { userSocketOrdersReducer } from './user-socket-orders';
import { initialState } from './user-socket-orders';

import { WS_USER_GET_ORDERS, WS_USER_RESET_ORDERS } from '../actions/user-socket-orders';




describe("user socket orders reducer", () => {

    it("initial state", () => {
        expect(userSocketOrdersReducer(undefined, {})).toEqual(initialState)
    })



    it("ws user get orders", () => {

        const socketOrders = {
            total: 66345,
            totalToday: 91,
            orders:
                [
                    {
                        "_id": "6793dc62133acd001be4c7b0",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T18:30:58.612Z",
                        "updatedAt": "2025-01-24T18:30:59.253Z",
                        "number": 66720
                    }

                ],
        }


        expect(userSocketOrdersReducer(initialState, {
            type: WS_USER_GET_ORDERS,
            payload: socketOrders,
        })).toEqual({
            total: 66345,
            totalToday: 91,
            ordersUser:
                [
                    {
                        "_id": "6793dc62133acd001be4c7b0",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T18:30:58.612Z",
                        "updatedAt": "2025-01-24T18:30:59.253Z",
                        "number": 66720
                    }

                ],
        })
    })



    it("ws user reset orders", () => {

        const socketOrders = {
            total: 66345,
            totalToday: 91,
            ordersUser:
                [
                    {
                        "_id": "6793dc62133acd001be4c7b0",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T18:30:58.612Z",
                        "updatedAt": "2025-01-24T18:30:59.253Z",
                        "number": 66720
                    }

                ]
        }


        expect(userSocketOrdersReducer(socketOrders, {
            type: WS_USER_RESET_ORDERS,
        })).toEqual(initialState)
    })


})