import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

import type { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { store } from '../index';

import { TBurgerElementActions } from '../services/actions/burger-element';
import { TBurgerIngredientActions } from '../services/actions/burger-ingredient';
import { TBurgerIngredients } from '../services/actions/burger-ingredients';
import { TBurgerOrder } from '../services/actions/burger-order';
import { TGetOrderByNumber } from '../services/actions/get-order-by-number';
import { TWsOrdersActions } from '../services/actions/socket-orders';
import { TWsUserOrdersActions } from '../services/actions/user-socket-orders';
import { IUserAuthAction } from '../services/actions/userAuth';

type TApplicationActions =
  | TBurgerElementActions
  | TBurgerIngredientActions
  | TBurgerIngredients
  | TBurgerOrder
  | TGetOrderByNumber
  | TWsOrdersActions
  | TWsUserOrdersActions
  | IUserAuthAction;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  TApplicationActions
>;

export const useDispatch = () => dispatchHook<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
