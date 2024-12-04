import React from 'react';

import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import { TIngridientProps } from '../../../utils/types'

import { useSelector, useDispatch } from '../../../utils/hook';

import { useDrag } from 'react-dnd';

import styles from './ingredients-item.module.css';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

type TIngredientsItemProps = {
  ingridient: TIngridientProps;
};

function IngredientsItem(props: TIngredientsItemProps): React.JSX.Element {

  const location = useLocation();

  const { burgerElements, bun } = useSelector((store) => ({
    burgerElements: store.burgerElements.burgerElement,
    bun: store.burgerElements.bun,
  }));

  const [, dragRef] = useDrag({
    type: props.ingridient.type,
    item: props.ingridient,
  });

  return (
    <Link
      to={`/ingredients/${props.ingridient._id}`}
      state={{ background: location }}
      className={styles.card_link}>
      <article
        ref={dragRef}
        className={`${styles.cart} pb-6`}
        >
        <img
          className={`${styles.cart_image} ml-4`}
          src={props.ingridient.image}
          alt={props.ingridient.name}
        />

        <div className={`${styles.row} mt-1`}>
          <p className='text text_type_digits-default mr-1'>
            {props.ingridient.price}
          </p>
          <CurrencyIcon type='primary' />
        </div>

        <p className={`${styles.cart_name} text text_type_main-default mt-2`}>
          {props.ingridient.name}
        </p>

        <Counter
          count={
            props.ingridient.type === 'bun'
            //@ts-ignore
              ? [bun].filter((item) => item._id === props.ingridient._id)
                  .length * 2
              : burgerElements.filter(
                  (item: TIngridientProps) => item._id === props.ingridient._id
                ).length
          }
          size='default'
          extraClass='m-1'
        />
      </article>
    </Link>
  );
}

export default IngredientsItem;
