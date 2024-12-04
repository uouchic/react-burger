import React from 'react';

import { useEffect } from 'react';

import styles from './order-details.module.css';

import { useSelector, useDispatch } from '../../utils/hook';

import { FormattedDate } from 'react-intl';

import { useParams } from 'react-router-dom';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { getOrderByNumber } from '../../services/actions/get-order-by-number';

function OrderDetails() {

  const dispatch = useDispatch();



  const { number } = useParams();

  useEffect(() => {
    //@ts-ignore
    dispatch(getOrderByNumber(number));
  }, [dispatch]);

  const { allBurgerIngredients } =
    useSelector((store) => ({
      allBurgerOrders: store.socketOrdersReducer.orders,
      allUserBurgerOrders: store.userSocketOrdersReducer.ordersUser,
      burgerByNumber: store.getOrderByNumber.orders,
      allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
    }));

  // console.log(allBurgerOrders);

  // console.log(allUserBurgerOrders);

  // console.log(allBurgerIngredients);

  // console.log(burgerByNumber);

  // console.log(number);

  // const selectBurgerOrder1 = allBurgerOrders.filter((o) => o.number === +number);

  // const selectBurgerOrder2 = allUserBurgerOrders.filter((o) => o.number === +number);

  //const selectBurgerOrder = selectBurgerOrder1.concat(selectBurgerOrder2);

  const selectBurgerOrder = useSelector((store) => {

    let order;
    
    order = store.socketOrdersReducer.orders.filter(
      //@ts-ignore
      (o) => o.number === +number
    );

    if (order.length !== 0) {
      return order;
    }

    order = store.userSocketOrdersReducer.ordersUser.filter(
      //@ts-ignore
      (o) => o.number === +number
    );

    if (order.length !== 0) {
      return order;
    }

    order = store.getOrderByNumber.orders.filter(
      //@ts-ignore
      (o) => o.number === +number
    );

    if (order) {
      return order;
    }


  });

  //console.log(selectBurgerOrder);
//@ts-ignore
  const sum = [];
//@ts-ignore
  selectBurgerOrder.map((item) =>
    item.ingredients.map((item2) =>
      allBurgerIngredients
  //@ts-ignore
        .filter((ingr) => ingr._id === item2)
        //@ts-ignore
        .map((i) => sum.push(i))
    )
  );

  // console.log(priceOrder);

  // console.log(sum);

  const initialValue = 0;
  //@ts-ignore
  const sum1 = sum.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );
//@ts-ignore
  const date = selectBurgerOrder.map((d) => d.createdAt);

  return (
    <div className={`${styles.order_contain} pl-10 pr-10`}>
      <h2
        className={`${styles.order_number} text text_type_digits-default mb-8`}>
          
        {`# ${
          //@ts-ignore
          selectBurgerOrder.map((o) => o.number)}`}
      </h2>
      
      <p className='text text_type_main-medium mb-4'>{
      //@ts-ignore
      selectBurgerOrder.map((o) => o.name)}
      </p>
      <p className='text text_type_main-default text_color_success mb-10'>
        Выполнен
      </p>
      <h2 className='text text_type_main-medium mb-4'>Состав:</h2>

      <div className={`${styles.order_ingredient_wrap} mb-15`}>
        
        {
        //@ts-ignore
        selectBurgerOrder.map((id) =>
          id.ingredients.map((id2) => (
            <div className={`${styles.order_ingredients_wrap} mb-4 mr-2`}>
              <div className={`${styles.order_ingredients_wrap}`}>
                <img
                  className={`${styles.order_ingredients_img}`}
                  src={allBurgerIngredients
                    //@ts-ignore
                    .filter((idIngredient) => idIngredient._id === id2).map((id3) => id3.image)}
                  alt=''
                />
                <p className='text text_type_main-default ml-4'>
                  {allBurgerIngredients
                  //@ts-ignore
                    .filter((idIngredient) => idIngredient._id === id2).map((id3) => id3.name)}
                </p>
              </div>

              <div className={`${styles.order_ingredients_wrap}`}>
                <p className='text text_type_digits-default mr-2'>
                  {allBurgerIngredients
                  //@ts-ignore
                    .filter((idIngredient) => idIngredient._id === id2).map((id3) => id3.price)}
                </p>
                <CurrencyIcon type='primary' />
              </div>
            </div>
          ))
        )}
      </div>

      <div className={`${styles.order_ingredients_wrap}`}>
        <p className='text text_type_main-default text_color_inactive'>
          
          <FormattedDate 
          //@ts-ignore
          value={date} />
        </p>

        <div className={`${styles.order_wrap}`}>
          <p className='text text_type_digits-default mr-2'>{sum1}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
