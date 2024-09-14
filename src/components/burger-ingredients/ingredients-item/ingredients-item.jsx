import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useDrag } from 'react-dnd';

import PropTypes from 'prop-types';
import styles from './ingredients-item.module.css';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsItem(props) {

  const { burgerElements, bun } = useSelector((store) => ({
    burgerElements: store.burgerElements.burgerElement,
    bun: store.burgerElements.bun,
  }));


  const dispatch = useDispatch();

  function handleClick() {

    dispatch({
      type: 'SELECT_BURGER_INGREDIENT',
      name: props.ingridient.name,
      proteins: props.ingridient.proteins,
      fat: props.ingridient.fat,
      carbohydrates: props.ingridient.carbohydrates,
      calories: props.ingridient.calories,
      image: props.ingridient.image,
    });
  }

  const [, dragRef] = useDrag({
    type: props.ingridient.type,
    item: props.ingridient,
  });

  return (
    <article
      ref={dragRef}
      className={`${styles.cart} pb-6`}
      onClick={handleClick}>
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
            ? [bun].filter((item) => item._id === props.ingridient._id).length*2
            : burgerElements.filter((item) => item._id === props.ingridient._id)
                .length
        }
        size='default'
        extraClass='m-1'
      />
    </article>
  );
}
IngredientsItem.propTypes = {
  ingridient: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
};

export default IngredientsItem;
