import BASE_URL from '../../utils/base-url'

import checkResponse from  '../../utils/check-response'

export const GET_BURGER_ORDER = 'GET_BURGER_ORDER';

export const CLOSE_BURGER_ORDER = 'CLOSE_BURGER_ORDER';


export function getOrderBurger(arrOrder) {


    return function (dispatch) {

        function getOrderBurgerData(arrOrder) {
            return fetch(`${BASE_URL}/orders`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    ingredients: arrOrder,
                }),
            })
                .then(checkResponse)
                .then((order) => {
                    dispatch({
                        type: GET_BURGER_ORDER,
                        orderNumber: order.order.number,
                    });
                })
                .catch((err) => console.log(err));
        }
        getOrderBurgerData(arrOrder)
    }
}