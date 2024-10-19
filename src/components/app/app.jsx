import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';

import Login from '../../pages/login/login';

import Home from '../../pages/home/home';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import IngredientView from '../../pages/ingredientView/ingredientView'

import Modal from '../modal/modal';
import IngredientDetails from '../burger-ingredients/ingredients-details/ingredients-details';

import { getIngredients } from '../../services/actions/burger-ingredients';

import { checkUserAuth } from '../../services/actions/userAuth'

import { CLOSE_BURGER_ORDER } from '../../services/actions/burger-order';

import { DELETE_BURGER_INGREDIENT } from '../../services/actions/burger-ingredient';

import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route'

import {
  LOADING_BURGER_ORDER,
} from '../../services/actions/burger-order';



function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };

  // console.log(background);

  // console.log(location);

  
  const dispatch = useDispatch();

  function closeModalOrder() {
    dispatch({
      type: CLOSE_BURGER_ORDER,
    });
    dispatch({
      type: LOADING_BURGER_ORDER,
      loading: false,
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

  useEffect(() => {
    dispatch(checkUserAuth());
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

          <Routes location={background || location}>
            <Route
              path='/'
              element={
                burgerIngredientsRequest ? (
                  <h2 className={`${styles.mess} mt-10`}>
                    Загрузка ингридиентов бургера
                  </h2>
                ) : burgerIngredientsFailed ? (
                  <h2 className={`${styles.mess} mt-10`}>
                    Что-то пошло не так
                  </h2>
                ) : (
                  <DndProvider backend={HTML5Backend}>
                    <Home
                      closeModal={closeModal}
                      closeModalOrder={closeModalOrder}
                    />
                  </DndProvider>
                )
              }
            />

            <Route path='/login' element={<OnlyUnAuth component={<Login/>} />} />

            <Route path='/register' element={<OnlyUnAuth component={<Register/>} />} />

            <Route path='/forgot-password' element={<OnlyUnAuth component={<ForgotPassword/>} />} />

            <Route path='/reset-password' element={<OnlyUnAuth component={<ResetPassword/>} />} />

            <Route path='/profile/*' element={<OnlyAuth component={<Profile/>} />} />

            <Route path='*' element={<h2>Страница не найдена</h2>} />

            <Route
              path='/ingredients/:ingredientId'
              element={<IngredientView />}
            />
          </Routes>


          {background && (
        <Routes>
	        <Route
	          path='/ingredients/:ingredientId'
	          element={
	            <Modal onClose={handleModalClose}>
	              <IngredientDetails />
	            </Modal>
	          }
	        />
        </Routes>
      )}


        
      </div>
    </>
  );
}

export default App;
