import React from 'react';

import OrderDetails from '../../components/order-details/order-details';

import styles from './orderView.module.css';



function OrderView(): React.JSX.Element {


  return (
    <section className={styles.contain}>
      <OrderDetails  />
    </section>
  );
}

export default OrderView;
