
import styles from './order-feed.module.css';

import { useSelector } from '../../utils/hook';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


import CardOrder from '../../components/card-order/card-order';

import NumberOrders from '../../components/numbers-orders/numbers-orders';

function OrderFeed(): React.JSX.Element {

  const location = useLocation();

  const { burgerOrders } = useSelector((store) => ({
    burgerOrders: store.socketOrdersReducer,
  }));


  return (
    <div className={`${styles.content}`}>
      <h2 className='text text_type_main-large mt-10'>Лента заказов</h2>
      <div className={`${styles.two_columns} mt-10`}>
        <section className={`${styles.list_feeds}`}>
          {burgerOrders.orders
            .filter((s) => s.status === 'done')
            .map((cardOrder, index) => (
              <Link
                key={index}
                to={`/feed/${cardOrder.number}`}
                state={{ background: location }}
                className={styles.order_link}>
                <CardOrder key={index} cardOrder={cardOrder} />
              </Link>
            ))}
        </section>
        <section className={`${styles.details_orders}`}>
          <div className={`${styles.two_columns_numbers_orders}`}>
            <NumberOrders
            //@ts-ignore
              numbers={burgerOrders}
              status={'done'}
              title='Готовы:'
            />
            <NumberOrders
            //@ts-ignore
              numbers={burgerOrders}
              status={'pending'}
              title='В работе:'
            />
          </div>

          <h2 className='text text_type_main-medium mt-10'>
            Выполнено за все время:
          </h2>
          <p className='text text_type_digits-large'>{burgerOrders.total}</p>

          <h2 className='text text_type_main-medium mt-10'>
            Выполнено за сегодня:
          </h2>
          <p className='text text_type_digits-large'>
            {burgerOrders.totalToday}
          </p>
        </section>
      </div>
    </div>
  );
}

export default OrderFeed;
