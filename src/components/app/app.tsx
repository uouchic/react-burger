import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from '../../utils/hook';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { IntlProvider } from 'react-intl';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header';

import Login from '../../pages/login/login';

import Home from '../../pages/home/home';
import Register from '../../pages/register/register';
import ForgotPassword from '../../pages/forgot-password/forgot-password';
import ResetPassword from '../../pages/reset-password/reset-password';
import Profile from '../../pages/profile/profile';
import IngredientView from '../../pages/ingredientView/ingredientView';
import OrderFeed from '../../pages/order-feed/order-feed';
import OrderView from '../../pages/orderView/orderView';

import UserOrders from '../../components/user-orders/user-orders';

import Modal from '../modal/modal';
import IngredientDetails from '../burger-ingredients/ingredients-details/ingredients-details';
import OrderDetails from '../order-details/order-details';

import { getIngredients } from '../../services/actions/burger-ingredients';

import { checkUserAuth } from '../../services/actions/userAuth';

import { CLOSE_BURGER_ORDER } from '../../services/actions/burger-order';

import { DELETE_BURGER_INGREDIENT } from '../../services/actions/burger-ingredient';

import { OnlyAuth, OnlyUnAuth } from '../protected-route/protected-route';

import { LOADING_BURGER_ORDER } from '../../services/actions/burger-order';

import { WS_CONNECTION_START } from '../../services/actions/socket-orders';

import { WS_USER_CONNECTION_START } from '../../services/actions/user-socket-orders';

function App(): React.JSX.Element {
  const location = useLocation();

  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    navigate(-1);
  };

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

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: WS_USER_CONNECTION_START,
    });
  }, [dispatch]);

  const { burgerIngredientsRequest, burgerIngredientsFailed } = useSelector(
    (store) => ({
      burgerIngredientsRequest:
        store.burgerIngredients.burgerIngredientsRequest,
      burgerIngredientsFailed: store.burgerIngredients.burgerIngredientsFailed,
    })
  );

  return (
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
              <h2 className={`${styles.mess} mt-10`}>Что-то пошло не так</h2>
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

        <Route path='/login' element={<OnlyUnAuth component={<Login />} />} />

        <Route
          path='/register'
          element={<OnlyUnAuth component={<Register />} />}
        />

        <Route
          path='/forgot-password'
          element={<OnlyUnAuth component={<ForgotPassword />} />}
        />

        <Route
          path='/reset-password'
          element={<OnlyUnAuth component={<ResetPassword />} />}
        />

        <Route path='/feed' element={<OrderFeed />} />

        <Route path='/profile' element={<OnlyAuth component={<Profile />} />}>
          <Route path='orders' element={<UserOrders />} />
        </Route>

        <Route path='*' element={<h2>Страница не найдена</h2>} />

        <Route path='/ingredients/:ingredientId' element={<IngredientView />} />

        <Route path='/feed/:number' element={<OrderView />} />

        <Route path='/profile/orders/:number' element={<OrderView />} />
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

          <Route
            path='/feed/:number'
            element={
              <Modal onClose={handleModalClose}>
                <OrderDetails />
              </Modal>
            }
          />

          <Route
            path='/profile/orders/:number'
            element={
              <Modal onClose={handleModalClose}>
                <OrderDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
