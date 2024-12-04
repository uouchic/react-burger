import type { TIngridientProps } from '../../utils/types';

export const ADD_BURGER_ELEMENT: 'ADD_BURGER_ELEMENT' = 'ADD_BURGER_ELEMENT';
export const DEL_BURGER_ELEMENT: 'DEL_BURGER_ELEMENT' = 'DEL_BURGER_ELEMENT';
export const ADD_BUN_ELEMENT: 'ADD_BUN_ELEMENT' = 'ADD_BUN_ELEMENT';
export const SORT_BURGER_ELEMENT: 'SORT_BURGER_ELEMENT' = 'SORT_BURGER_ELEMENT';

export interface IAddBurgerElementAction {
  readonly type: typeof ADD_BURGER_ELEMENT;
  readonly burgerElement: TIngridientProps;
}

export interface IDellBunElementAction {
  readonly type: typeof DEL_BURGER_ELEMENT;
  readonly id: number;
}

export interface IAddBunElementAction {
  readonly type: typeof ADD_BUN_ELEMENT;
  readonly bun: TIngridientProps;
}

export interface ISortBurgerElementAction {
  readonly type: typeof SORT_BURGER_ELEMENT;
  readonly newCards: ReadonlyArray<TIngridientProps>;
}

export type TBurgerElementActions =
  | IAddBurgerElementAction
  | IDellBunElementAction
  | IAddBunElementAction
  | ISortBurgerElementAction;
