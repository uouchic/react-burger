import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { getIngredients } from '../../services/actions/burger-ingredients';


import { CLOSE_BURGER_ORDER } from '../../services/actions/burger-order';

import { DELETE_BURGER_INGREDIENT } from '../../services/actions/burger-ingredient';

function App() {
  
  const dispatch = useDispatch();

  function closeModalOrder() {
    dispatch({
      type: CLOSE_BURGER_ORDER,
    });
  }

  function closeModal() {
    dispatch({
      type: DELETE_BURGER_INGREDIENT,
    });
  }

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { burgerIngredientsRequest, burgerIngredientsFailed } = useSelector(
    (store) => ({
      burgerIngredientsRequest:
        store.burgerIngredients.burgerIngredientsRequest,
      burgerIngredientsFailed: store.burgerIngredients.burgerIngredientsFailed,
    })
  );

  return (
    <>
      <div className={styles.app}>
        <AppHeader />

        {burgerIngredientsRequest ? (
          <h2 className={`${styles.mess} mt-10`}>
            Загрузка ингридиентов бургера
          </h2>
        ) : burgerIngredientsFailed ? (
          <h2 className={`${styles.mess} mt-10`}>Что-то пошло не так</h2>
        ) : (
          <DndProvider backend={HTML5Backend}>
            <main className={`${styles.content} pb-10`}>
              <BurgerIngredients onClose={closeModal} />

              <BurgerConstructor onClose={closeModalOrder} />
            </main>
          </DndProvider>
        )}
      </div>
    </>
  );
}

export default App;
