export const GET_BURGER_INGREDIENTS_REQUEST = 'GET_BURGER_INGREDIENTS_REQUEST';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_FAILED = 'GET_BURGER_INGREDIENTS_FAILED';

export function getIngredients() {

  const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';
  // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
  return function (dispatch) {
    // Проставим флаг в хранилище о том, что мы начали выполнять запрос
    // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
    // ввод на время выполнения запроса
    dispatch({
      type: GET_BURGER_INGREDIENTS_REQUEST
    });


    const getIngredientsData = async () => {
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
          dispatch({
            type: GET_BURGER_INGREDIENTS_FAILED
          })
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        const ingredients = await res.json();
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
