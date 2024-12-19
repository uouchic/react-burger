import BASE_URL from '../../utils/base-url';

import checkResponse from '../../utils/check-response';

import { Dispatch } from 'redux';

import { ThunkAction } from 'redux-thunk';

import { Action, ActionCreator } from 'redux';

import { store } from '../../index';

import type { TIngridientProps } from '../../utils/types';

export type RootState = ReturnType<typeof store.getState>;



export const GET_BURGER_INGREDIENTS_REQUEST: 'GET_BURGER_INGREDIENTS_REQUEST' =
  'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS: 'GET_BURGER_INGREDIENTS_SUCCESS' =
  'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED: 'GET_BURGER_INGREDIENTS_FAILED' =
  'GET_BURGER_INGREDIENTS_FAILED';

export interface IGetBurgerzingredientsRequestAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_REQUEST;
}

export interface IGetBurgerzingredientsSuccesAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_SUCCESS;
  readonly burgerIngredients: TIngridientProps;
  

}

export interface IGetBurgerzingredientsFailedAction {
  readonly type: typeof GET_BURGER_INGREDIENTS_FAILED;
}


export type TIngredientsData = {
  data: TIngridientProps;
};


export type TBurgerIngredients =
  | IGetBurgerzingredientsRequestAction
  | IGetBurgerzingredientsSuccesAction
  | IGetBurgerzingredientsFailedAction;

export type TApplicationActions = TBurgerIngredients;

export type AppDispatch = Dispatch<TApplicationActions>; 


export function getIngredients() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST,
    });

    const getIngredientsData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/ingredients`);
        const ingredients: TIngredientsData = await checkResponse(res);
        dispatch({
          type: GET_BURGER_INGREDIENTS_SUCCESS,
          burgerIngredients: ingredients.data,
        });
      } catch (err) {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED,
        });
      }
    };
    getIngredientsData();
  };
}
