import React from 'react';

import styles from './numbers-orders.module.css';

import { TOrder } from '../../utils/types'


type TNumberOrdersProps = {
  title: string;
  status: string;
  numbers: {
    orders: TOrder;
  };
};

function NumberOrders(props: TNumberOrdersProps): React.JSX.Element {
  return (
    <div>
      <h2 className='text text_type_main-medium mb-6'>{props.title}</h2>
      <ul className={`${styles.columns}`}>
        {props.numbers.orders
        //@ts-ignore
          .filter((s: TOrder) => s.status === props.status)
          .slice(0, 12)
          .map((n: TOrder, index: number) => (
            <li
              key={index}
              style={{ listStyle: 'none' }}
              className={
                props.status === 'done'
                  ? 'text text_type_digits-default text_color_success mb-2 mr-8'
                  : 'text text_type_digits-default'
              }>
              {n.number}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NumberOrders;
