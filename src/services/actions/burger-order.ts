import BASE_URL from '../../utils/base-url';

import checkResponse from '../../utils/check-response';

import { Dispatch } from 'redux';

import { ThunkAction } from 'redux-thunk';

import { Action, ActionCreator } from 'redux';

import { store } from '../../index';

import type { TIngridientProps } from '../../utils/types';

export type RootState = ReturnType<typeof store.getState>;

export const GET_BURGER_ORDER: 'GET_BURGER_ORDER' = 'GET_BURGER_ORDER';

export const CLOSE_BURGER_ORDER: 'CLOSE_BURGER_ORDER' = 'CLOSE_BURGER_ORDER';

export const LOADING_BURGER_ORDER: 'LOADING_BURGER_ORDER' =
  'LOADING_BURGER_ORDER';

export interface IGetBurgerOrderAction {
  readonly type: typeof GET_BURGER_ORDER;
  readonly orderNumber: number;
}

export interface ICloseBurgerOrderAction {
  readonly type: typeof CLOSE_BURGER_ORDER;
}

export interface ILoadingBurgerOrderAction {
  readonly type: typeof LOADING_BURGER_ORDER;
  readonly loading: boolean;
}

export type TBurgerOrder =
  | IGetBurgerOrderAction
  | ICloseBurgerOrderAction
  | ILoadingBurgerOrderAction;

export type TOrder = {
  order: {
    number: number;
  };
};

export type TApplicationActions = TBurgerOrder;

export type AppDispatch = Dispatch<TApplicationActions>;

export function getOrderBurger(arrOrder: Array<string>) {
  return function (dispatch: AppDispatch) {
    function getOrderBurgerData(arrOrder: Array<string>) {
      return fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        //@ts-ignore
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('accessToken'),
        },
        body: JSON.stringify({
          ingredients: arrOrder,
        }),
      })
        .then(checkResponse<TOrder>)

        .then((order) => {
          dispatch({
            type: GET_BURGER_ORDER,
            orderNumber: order.order.number,
          });
        })
        .catch((err) => console.log(err));
    }
    getOrderBurgerData(arrOrder);
  };
}
