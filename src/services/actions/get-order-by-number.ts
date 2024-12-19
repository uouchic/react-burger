import checkResponse from '../../utils/check-response';

import { Dispatch } from 'redux';

import { ThunkAction } from 'redux-thunk';

import { Action, ActionCreator } from 'redux';

import { store } from '../../index';

import type { TIngridientProps } from '../../utils/types';

import type { TOrder } from '../../utils/types';

import BASE_URL from '../../utils/base-url';

export type RootState = ReturnType<typeof store.getState>;

export const GET_ORDER_BY_NUMBER: 'GET_ORDER_BY_NUMBER' = 'GET_ORDER_BY_NUMBER';

export interface IGetOrderByNumberAction {
  readonly type: typeof GET_ORDER_BY_NUMBER;
  readonly orders:  Array<TOrder>;


}


export type TGetOrderByNumber = IGetOrderByNumberAction; //____&&&&&&&&&&&&&&&&

export type TOrderByNumber = {
    orders: Array<TOrder>
  }

export type AppDispatch = Dispatch<IGetOrderByNumberAction>;

export function getOrderByNumber(number: string) {
  return function (dispatch: AppDispatch) {
    function getOrderByNumberData(number: string) {
      return fetch(`${BASE_URL}/orders/${number}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then(checkResponse)
        //@ts-ignore
        .then((orderByNumber: TOrderByNumber) => {
          console.log(orderByNumber);
          dispatch({
            type: GET_ORDER_BY_NUMBER,
            orders: orderByNumber.orders,
          });
        })
        .catch((err) => console.log(err));
    }
    getOrderByNumberData(number);
  };
}
