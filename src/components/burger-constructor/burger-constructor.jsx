import React from 'react';

import { getOrderBurger } from '../../services/actions/burger-order';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import styles from './burger-constructor.module.css';

import Modal from '../modal/modal';

import OrderDetails from '../burger-constructor/order-details/order-details';

import BurgerElement from './burger-element/burger-element';

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import {
  ADD_BURGER_ELEMENT,
  ADD_BUN_ELEMENT,
  SORT_BURGER_ELEMENT,
} from '../../services/actions/burger-element';

function BurgerConstructor(props) {
  const dispatch = useDispatch();

  const { burgerElement, bun, orderNumber } = useSelector((store) => ({
    burgerElement: store.burgerElements.burgerElement,
    bun: store.burgerElements.bun,
    orderNumber: store.orderBurger.orderNumber,
  }));

  const [, dropIngredients] = useDrop({
    accept: ['main', 'sauce'],
    drop(burgerElement) {
      dispatch({
        type: ADD_BURGER_ELEMENT,
        burgerElement: {
          ...burgerElement,
          namber: Math.round(Math.random() * 10000),
        },
      });
    },
  });

  const [, dropBunTop] = useDrop({
    accept: 'bun',
    drop(bun) {
      dispatch({
        type: ADD_BUN_ELEMENT,
        bun: bun,
      });
    },
  });

  const [, dropBunBottom] = useDrop({
    accept: 'bun',
    drop(bun) {
      dispatch({
        type: ADD_BUN_ELEMENT,
        bun: bun,
      });
    },
  });

  //   ------------------- Расчет стоиости заказа--------------------------

  const initialValue = 0;
  const sum1 = burgerElement.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );
  const sum2 = bun.price ? bun.price * 2 : 0;
  const sum = sum1 + sum2;

  // -------------------------------Перетаскивание карточек--------------------------------------

  const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = burgerElement[dragIndex];
    const newCards = [...burgerElement];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    dispatch({
      type: SORT_BURGER_ELEMENT,
      newCards: newCards,
    });
  };

  // ---------------------------- Получение заказа АПИ -----------------------------------

  const arrOrder = burgerElement.map((ing) => ing._id);
  arrOrder.push(bun._id);
  arrOrder.unshift(bun._id);

  function onClick() {
    dispatch(getOrderBurger(arrOrder));
  }

  return (
    <>
      <div>
        <section className={`${styles.section} mt-25`}>
          <div ref={dropBunTop}>
            <ConstructorElement
              extraClass={'ml-8'}
              type='top'
              isLocked={true}
              text={bun.name ? `${bun.name} (верх)` : bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>

          <div
            ref={dropIngredients}
            className={`${styles.wrap_items} mt-4 mb-4`}>
            {burgerElement.map((burgerElement, index) => (
              <div key={burgerElement.namber} className={`${styles.wrap_item}`}>
                <BurgerElement
                  index={index}
                  moveCard={moveCard}
                  burgerElement={burgerElement}
                />
              </div>
            ))}
          </div>

          <div ref={dropBunBottom}>
            <ConstructorElement
              extraClass={'ml-8 mb-10'}
              type='bottom'
              isLocked={true}
              text={bun.name ? `${bun.name} (низ)` : bun.name}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>

          <div className={`${styles.wrap_btn}`}>
            <p className='text text_type_digits-medium mr-2'>{sum}</p>

            <CurrencyIcon type='primary' />

            <Button
              onClick={onClick}
              htmlType='button'
              type='primary'
              size='large'
              extraClass='ml-10 mr-4'>
              Оформить заказ
            </Button>
          </div>
        </section>
      </div>

      <Modal ing={orderNumber} onClose={props.onClose} title={''}>
        <OrderDetails orderNumber={orderNumber} />
      </Modal>
    </>
  );
}
BurgerConstructor.propTypes = {
  onClose: PropTypes.func,
};

export default BurgerConstructor;
