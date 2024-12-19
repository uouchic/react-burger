import React from 'react';
import * as ReactDOM from 'react-dom';

import styles from './order-details.module.css';

import graphics from '../../../images/graphics.svg';

import {} from '@ya.praktikum/react-developer-burger-ui-components';

type TOrderDetails = {
  orderNumber: number | string;
};

function OrderDetails(props: TOrderDetails): React.JSX.Element {
  return (
    <>
      <p className={`${styles.order_number} text text_type_digits-large mt-20`}>
        {props.orderNumber}
      </p>
      <p className={`${styles.order_number} text text_type_main-medium mt-8`}>
        идентификатор заказа
      </p>
      <img className={`${styles.order_img}`} src={graphics} alt='галочка OK' />
      <p className={`${styles.order_number} text text_type_main-default mt-15`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${styles.order_number} text text_type_main-default mt-2 text_color_inactive mb-15`}>
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
}

export default OrderDetails;
