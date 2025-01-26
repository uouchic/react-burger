import {
  ADD_BURGER_ELEMENT,
  DEL_BURGER_ELEMENT,
  ADD_BUN_ELEMENT,
  SORT_BURGER_ELEMENT,
} from '../actions/burger-element';

import type { TIngridientProps } from '../../utils/types';

import type { TBurgerElementActions } from '../actions/burger-element';

type TBurgerElementState = {
  bun: TIngridientProps;
  burgerElement: ReadonlyArray<TIngridientProps>;
};

export const initialState: TBurgerElementState = {
  bun: {
    calories: 0,
    carbohydrates: 0,
    fat: 0,
    image: '',
    image_large: '',
    image_mobile: '',
    name: '',
    price: 0,
    proteins: 0,
    type: '',
    __v: 0,
    _id: 'string',
  },
  burgerElement: [],
};

export const burgerElements = (
  state = initialState,
  action: TBurgerElementActions
): TBurgerElementState => {
  switch (action.type) {
    case ADD_BURGER_ELEMENT: {
      return {
        ...state,
        burgerElement: [...state.burgerElement, action.burgerElement],
      };
    }
    case DEL_BURGER_ELEMENT: {
      return {
        ...state,
        burgerElement: [
          ...state.burgerElement.filter(
            (element) => element.namber !== action.id
          ),
        ],
      };
    }
    case ADD_BUN_ELEMENT: {
      return {
        ...state,
        bun: action.bun,
      };
    }
    case SORT_BURGER_ELEMENT: {
      return {
        ...state,
        burgerElement: action.newCards,
      };
    }
    default: {
      return state;
    }
  }
};
