import BASE_URL from '../../utils/base-url'

import checkResponse from '../../utils/check-response'

export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_BURGER_INGREDIENTS_FAILED';



export function getIngredients() {

  return function (dispatch) {

    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST
    });


    const getIngredientsData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/ingredients`);
        const ingredients = await checkResponse(res);
        dispatch({
          type: GET_BURGER_INGREDIENTS_SUCCESS,
          burgerIngredients: ingredients.data,
        });

      } catch (err) {
        dispatch({
          type: GET_BURGER_INGREDIENTS_FAILED
        })
      }
    }
    getIngredientsData();

  }
}
