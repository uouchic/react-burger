import { socketOrdersReducer } from './socket-orders';
import { initialState } from './socket-orders';

import { WS_GET_ORDERS } from '../actions/socket-orders';

describe("socket orders reducer", () => {

    it("initial state", () => {
        expect(socketOrdersReducer(undefined, {})).toEqual(initialState)
    })



    it("ws get orders", () => {

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
                    },
                    {
                        "_id": "6793db09133acd001be4c7ab",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa0941",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa0946",
                            "643d69a5c3f7b9001cfa0947",
                            "643d69a5c3f7b9001cfa0948",
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa094a",
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa0943",
                            "643d69a5c3f7b9001cfa0944",
                            "643d69a5c3f7b9001cfa0945",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный антарианский space астероидный фалленианский люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер",
                        "createdAt": "2025-01-24T18:25:13.495Z",
                        "updatedAt": "2025-01-24T18:25:14.149Z",
                        "number": 66719
                    },
                    {
                        "_id": "6793da10133acd001be4c7a9",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0941",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa0946",
                            "643d69a5c3f7b9001cfa0947",
                            "643d69a5c3f7b9001cfa0947",
                            "643d69a5c3f7b9001cfa0946",
                            "643d69a5c3f7b9001cfa0948",
                            "643d69a5c3f7b9001cfa0948",
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa094a",
                            "643d69a5c3f7b9001cfa094a",
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa0943",
                            "643d69a5c3f7b9001cfa0943",
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa0944",
                            "643d69a5c3f7b9001cfa0945",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный антарианский space астероидный фалленианский люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер",
                        "createdAt": "2025-01-24T18:21:04.647Z",
                        "updatedAt": "2025-01-24T18:21:05.240Z",
                        "number": 66718
                    },
                    {
                        "_id": "6793d87a133acd001be4c79f",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T18:14:18.159Z",
                        "updatedAt": "2025-01-24T18:14:18.787Z",
                        "number": 66717
                    },
                    {
                        "_id": "6793d4e3133acd001be4c788",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бессмертный бургер",
                        "createdAt": "2025-01-24T17:58:59.924Z",
                        "updatedAt": "2025-01-24T17:59:00.553Z",
                        "number": 66716
                    },
                    {
                        "_id": "6793c51f133acd001be4c757",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Экзо-плантаго флюоресцентный бургер",
                        "createdAt": "2025-01-24T16:51:43.004Z",
                        "updatedAt": "2025-01-24T16:51:43.706Z",
                        "number": 66715
                    },
                    {
                        "_id": "6793b9fd133acd001be4c73e",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa0941",
                            "643d69a5c3f7b9001cfa094a",
                            "643d69a5c3f7b9001cfa0948",
                            "643d69a5c3f7b9001cfa0949",
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный астероидный альфа-сахаридный экзо-плантаго spicy био-марсианский бургер",
                        "createdAt": "2025-01-24T16:04:13.444Z",
                        "updatedAt": "2025-01-24T16:04:14.040Z",
                        "number": 66714
                    },
                    {
                        "_id": "6793b86b133acd001be4c736",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T15:57:31.905Z",
                        "updatedAt": "2025-01-24T15:57:32.805Z",
                        "number": 66713
                    },
                    {
                        "_id": "6793b82e133acd001be4c734",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0941",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный био-марсианский люминесцентный бургер",
                        "createdAt": "2025-01-24T15:56:30.685Z",
                        "updatedAt": "2025-01-24T15:56:31.326Z",
                        "number": 66712
                    },
                    {
                        "_id": "6793aefc133acd001be4c720",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T15:17:16.404Z",
                        "updatedAt": "2025-01-24T15:17:17.092Z",
                        "number": 66711
                    },
                    {
                        "_id": "6793aad8133acd001be4c71b",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:59:36.576Z",
                        "updatedAt": "2025-01-24T14:59:37.216Z",
                        "number": 66710
                    },
                    {
                        "_id": "6793a4f9133acd001be4c708",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa0945",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0947"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный фалленианский люминесцентный антарианский бургер",
                        "createdAt": "2025-01-24T14:34:33.660Z",
                        "updatedAt": "2025-01-24T14:34:34.291Z",
                        "number": 66709
                    },
                    {
                        "_id": "6793a3b4133acd001be4c702",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093c"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:29:08.670Z",
                        "updatedAt": "2025-01-24T14:29:09.343Z",
                        "number": 66708
                    },
                    {
                        "_id": "6793a1cb133acd001be4c6ff",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:20:59.827Z",
                        "updatedAt": "2025-01-24T14:21:00.495Z",
                        "number": 66707
                    },
                    {
                        "_id": "6793a12c133acd001be4c6fe",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:18:20.826Z",
                        "updatedAt": "2025-01-24T14:18:21.400Z",
                        "number": 66706
                    },
                    {
                        "_id": "6793a0d7133acd001be4c6fd",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T14:16:55.481Z",
                        "updatedAt": "2025-01-24T14:16:56.219Z",
                        "number": 66705
                    },
                    {
                        "_id": "6793a0ca133acd001be4c6fc",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T14:16:42.867Z",
                        "updatedAt": "2025-01-24T14:16:43.488Z",
                        "number": 66704
                    },
                    {
                        "_id": "6793a086133acd001be4c6fb",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093c"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:15:34.998Z",
                        "updatedAt": "2025-01-24T14:15:35.712Z",
                        "number": 66703
                    },
                    {
                        "_id": "67939fdb133acd001be4c6f5",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:12:43.827Z",
                        "updatedAt": "2025-01-24T14:12:44.414Z",
                        "number": 66702
                    },
                    {
                        "_id": "67939d37133acd001be4c6f0",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T14:01:27.096Z",
                        "updatedAt": "2025-01-24T14:01:27.831Z",
                        "number": 66701
                    },
                    {
                        "_id": "67939cb2133acd001be4c6ec",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T13:59:14.999Z",
                        "updatedAt": "2025-01-24T13:59:15.718Z",
                        "number": 66700
                    },
                    {
                        "_id": "67939c3a133acd001be4c6e7",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T13:57:14.742Z",
                        "updatedAt": "2025-01-24T13:57:15.346Z",
                        "number": 66699
                    },
                    {
                        "_id": "67939b47133acd001be4c6e3",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T13:53:11.786Z",
                        "updatedAt": "2025-01-24T13:53:12.484Z",
                        "number": 66698
                    },
                    {
                        "_id": "67939aa4133acd001be4c6e2",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T13:50:28.349Z",
                        "updatedAt": "2025-01-24T13:50:28.995Z",
                        "number": 66697
                    },
                    {
                        "_id": "67939858133acd001be4c6e0",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T13:40:40.924Z",
                        "updatedAt": "2025-01-24T13:40:41.522Z",
                        "number": 66696
                    },
                    {
                        "_id": "679397f0133acd001be4c6de",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa0940"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный метеоритный бургер",
                        "createdAt": "2025-01-24T13:38:56.059Z",
                        "updatedAt": "2025-01-24T13:38:56.732Z",
                        "number": 66695
                    },
                    {
                        "_id": "679388f9133acd001be4c6c8",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T12:35:05.270Z",
                        "updatedAt": "2025-01-24T12:35:05.884Z",
                        "number": 66694
                    },
                    {
                        "_id": "67938849133acd001be4c6c6",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T12:32:09.532Z",
                        "updatedAt": "2025-01-24T12:32:10.152Z",
                        "number": 66693
                    },
                    {
                        "_id": "6793840e133acd001be4c6bf",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный spicy люминесцентный метеоритный бургер",
                        "createdAt": "2025-01-24T12:14:06.827Z",
                        "updatedAt": "2025-01-24T12:14:07.584Z",
                        "number": 66692
                    },
                    {
                        "_id": "67938340133acd001be4c6bd",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093f",
                            "643d69a5c3f7b9001cfa094a",
                            "643d69a5c3f7b9001cfa0942",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Астероидный флюоресцентный spicy бессмертный бургер",
                        "createdAt": "2025-01-24T12:10:40.505Z",
                        "updatedAt": "2025-01-24T12:10:41.149Z",
                        "number": 66691
                    },
                    {
                        "_id": "679381c8133acd001be4c6b4",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T12:04:24.515Z",
                        "updatedAt": "2025-01-24T12:04:25.155Z",
                        "number": 66690
                    },
                    {
                        "_id": "67937ced133acd001be4c6aa",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T11:43:41.105Z",
                        "updatedAt": "2025-01-24T11:43:41.794Z",
                        "number": 66689
                    },
                    {
                        "_id": "67937707133acd001be4c6a2",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093c"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T11:18:31.290Z",
                        "updatedAt": "2025-01-24T11:18:32.004Z",
                        "number": 66688
                    },
                    {
                        "_id": "67937602133acd001be4c69e",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T11:14:10.380Z",
                        "updatedAt": "2025-01-24T11:14:11.080Z",
                        "number": 66687
                    },
                    {
                        "_id": "679374e2133acd001be4c69c",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T11:09:22.698Z",
                        "updatedAt": "2025-01-24T11:09:23.383Z",
                        "number": 66686
                    },
                    {
                        "_id": "6793728c133acd001be4c697",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Краторный люминесцентный бургер",
                        "createdAt": "2025-01-24T10:59:24.114Z",
                        "updatedAt": "2025-01-24T10:59:24.809Z",
                        "number": 66685
                    },
                    {
                        "_id": "6793721a133acd001be4c694",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T10:57:30.361Z",
                        "updatedAt": "2025-01-24T10:57:30.991Z",
                        "number": 66684
                    },
                    {
                        "_id": "67936f26133acd001be4c690",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T10:44:54.684Z",
                        "updatedAt": "2025-01-24T10:44:55.385Z",
                        "number": 66683
                    },
                    {
                        "_id": "67936a9f133acd001be4c688",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный метеоритный бургер",
                        "createdAt": "2025-01-24T10:25:35.399Z",
                        "updatedAt": "2025-01-24T10:25:36.086Z",
                        "number": 66682
                    },
                    {
                        "_id": "67936573133acd001be4c67b",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0941"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный био-марсианский бургер",
                        "createdAt": "2025-01-24T10:03:31.634Z",
                        "updatedAt": "2025-01-24T10:03:32.220Z",
                        "number": 66681
                    },
                    {
                        "_id": "67936366133acd001be4c674",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T09:54:46.360Z",
                        "updatedAt": "2025-01-24T09:54:47.016Z",
                        "number": 66680
                    },
                    {
                        "_id": "67936113133acd001be4c672",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093c"
                        ],
                        "status": "done",
                        "name": "Краторный бургер",
                        "createdAt": "2025-01-24T09:44:51.474Z",
                        "updatedAt": "2025-01-24T09:44:52.038Z",
                        "number": 66679
                    },
                    {
                        "_id": "67935fea133acd001be4c670",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный бургер",
                        "createdAt": "2025-01-24T09:39:54.274Z",
                        "updatedAt": "2025-01-24T09:39:54.894Z",
                        "number": 66678
                    },
                    {
                        "_id": "67935ba4133acd001be4c666",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T09:21:40.267Z",
                        "updatedAt": "2025-01-24T09:21:40.915Z",
                        "number": 66677
                    },
                    {
                        "_id": "67935b61133acd001be4c664",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T09:20:33.816Z",
                        "updatedAt": "2025-01-24T09:20:34.879Z",
                        "number": 66676
                    },
                    {
                        "_id": "6793595b133acd001be4c65a",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T09:11:55.864Z",
                        "updatedAt": "2025-01-24T09:11:56.456Z",
                        "number": 66675
                    },
                    {
                        "_id": "679355cb133acd001be4c658",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0943"
                        ],
                        "status": "done",
                        "name": "Space флюоресцентный люминесцентный бургер",
                        "createdAt": "2025-01-24T08:56:43.978Z",
                        "updatedAt": "2025-01-24T08:56:44.560Z",
                        "number": 66674
                    },
                    {
                        "_id": "679350e1133acd001be4c64e",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa0940"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный люминесцентный метеоритный бургер",
                        "createdAt": "2025-01-24T08:35:45.290Z",
                        "updatedAt": "2025-01-24T08:35:45.918Z",
                        "number": 66673
                    },
                    {
                        "_id": "679332c1133acd001be4c632",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa0941",
                            "643d69a5c3f7b9001cfa0941",
                            "643d69a5c3f7b9001cfa093e",
                            "643d69a5c3f7b9001cfa093c"
                        ],
                        "status": "done",
                        "name": "Краторный био-марсианский люминесцентный бургер",
                        "createdAt": "2025-01-24T06:27:13.329Z",
                        "updatedAt": "2025-01-24T06:27:13.935Z",
                        "number": 66672
                    },
                    {
                        "_id": "67931ccf133acd001be4c625",
                        "ingredients": [
                            "643d69a5c3f7b9001cfa093d",
                            "643d69a5c3f7b9001cfa0940",
                            "643d69a5c3f7b9001cfa093d"
                        ],
                        "status": "done",
                        "name": "Флюоресцентный метеоритный бургер",
                        "createdAt": "2025-01-24T04:53:35.478Z",
                        "updatedAt": "2025-01-24T04:53:36.085Z",
                        "number": 66671
                    }

                ],
        }


        expect(socketOrdersReducer(initialState, {
            type: WS_GET_ORDERS,
            payload: socketOrders,
        })).toEqual(socketOrders)
    })






})



