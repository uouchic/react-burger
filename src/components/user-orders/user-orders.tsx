import React from 'react';

import { useEffect } from 'react';

import { useSelector, useDispatch } from '../../utils/hook';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import styles from './user-orders.module.css';

import CardOrder from '../card-order/card-order';

import { WS_USER_CONNECTION_START } from '../../services/actions/user-socket-orders';



function UserOrders() {

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: WS_USER_CONNECTION_START,
    });
  }, [dispatch]);

  const { burgerUserOrders } = useSelector((store) => ({
    burgerUserOrders: store.userSocketOrdersReducer,
  }));

  //console.log(burgerUserOrders);

  return (
    <div className={`${styles.column}`}>
      {burgerUserOrders.ordersUser
        .filter((s) => s.status === 'done')
        .map((cardOrder, index) => (
          <Link
          key={index}
          to={`/profile/orders/${cardOrder.number}`}
          state={{ background: location }}
          className={styles.order_link}>
          <CardOrder key={index} cardOrder={cardOrder} />
          </Link>
        ))}
    </div>
  );
}

export default UserOrders;
