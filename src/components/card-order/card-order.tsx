import React from 'react';

//import {FormattedDate} from 'react-intl'

import styles from './card-order.module.css';

//import { useSelector } from 'react-redux';

import { useSelector, useDispatch } from '../../utils/hook';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { FormattedDate } from 'react-intl';

import { TIngridientProps } from '../../utils/types';

type TCardOrderProps = {
  cardOrder: {
    ingredients: Array<string>;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    status: string;
    _id: string;
  };
};

function CardOrder(props: TCardOrderProps): React.JSX.Element {

  const { allBurgerIngredients } = useSelector((store) => ({
    allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
  }));

  const sum: [] = [];

  props.cardOrder.ingredients.map((ing) =>
    //@ts-ignore
    allBurgerIngredients.filter((ingr: TIngridientProps) => ingr._id === ing).map((i) => sum.push(i))
  );

  const initialValue = 0;
  const sum1 = sum.reduce(
    (accumulator: number, currentValue: {price: number}) => accumulator + currentValue.price,
    initialValue
  );

  //console.log(sum);

  return (
    <div className={`${styles.card_order} mr-2 mb-4`}>
      <div className={`${styles.order_id} p-6`}>
        <p className='text text_type_digits-default'>{`#${props.cardOrder.number}`}</p>
        <p className='text text_type_main-default text_color_inactive'>
          <FormattedDate value={props.cardOrder.createdAt} />
        </p>
      </div>
      <p className='text text_type_main-medium pl-6 pr-6'>
        {props.cardOrder.name}
      </p>
      <div className={`${styles.ingredients_price} p-6`}>
        <div className={`${styles.ingredients}  ml-4`}>
          {props.cardOrder.ingredients
            .slice(0, 6)
            .map((idIngredientOrder: string, index: number) => (
              <img
                key={index}
                className={`${styles.ingredient}`}
                src={allBurgerIngredients
                  //@ts-ignore
                  .filter(
                    (idIngredient: TIngridientProps) => idIngredient._id === idIngredientOrder
                  )
                  .map((id: TIngridientProps) => id.image)}
                alt='ингридиент'
              />
            ))}
        </div>

        <div className={`${styles.price}`}>
          <p className='text text_type_digits-default mr-4'>{sum1}</p>
          <CurrencyIcon type='primary' />
        </div>
      </div>
    </div>
  );
}

export default CardOrder;
