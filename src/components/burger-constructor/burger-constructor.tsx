import React, { SyntheticEvent } from 'react';

import { getOrderBurger } from '../../services/actions/burger-order';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from '../../utils/hook';

import { useDrop } from 'react-dnd';
import styles from './burger-constructor.module.css';

import Modal from '../modal/modal';

import OrderDetails from './order-details/order-details';

import BurgerElement from './burger-element/burger-element';

import Preloader from '../preloader/preloader';

import { TIngridientProps } from '../../utils/types';

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

import { LOADING_BURGER_ORDER } from '../../services/actions/burger-order';

type TBurgerConstructor = {
  onClose: () => void;
};

function BurgerConstructor(props: TBurgerConstructor): React.JSX.Element {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { burgerElement, bun, orderNumber, user, orderLoading } = useSelector(
    (store) => ({
      burgerElement: store.burgerElements.burgerElement,
      bun: store.burgerElements.bun,
      orderNumber: store.orderBurger.orderNumber,
      user: store.userRegister.user,
      orderLoading: store.orderBurger.orderLoading,
    })
  );

  const [, dropIngredients] = useDrop({
    accept: ['main', 'sauce'],
    drop(burgerElement) {
      dispatch({
        type: ADD_BURGER_ELEMENT,
        burgerElement: {
          // @ts-ignore
          ...burgerElement,
          namber: Math.round(Math.random() * 10000),
        },
      });
    },
  });

  const [, dropBunTop] = useDrop({
    accept: 'bun',
    drop(bun) {
      //@ts-ignore
      dispatch({
        type: ADD_BUN_ELEMENT,
        bun: bun,
      });
    },
  });

  const [, dropBunBottom] = useDrop({
    accept: 'bun',
    drop(bun) {
      //@ts-ignore
      dispatch({
        type: ADD_BUN_ELEMENT,
        bun: bun,
      });
    },
  });

  //   ------------------- Расчет стоиости заказа--------------------------

  const initialValue = 0;
  const sum1 = burgerElement.reduce(
    (accumulator: number, currentValue: { price: number }) =>
      accumulator + currentValue.price,
    initialValue
  );

  const sum2 = bun.price ? bun.price * 2 : 0;
  const sum = sum1 + sum2;

  // -------------------------------Перетаскивание карточек--------------------------------------

  const moveCard = (dragIndex: number, hoverIndex: number) => {
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

  const arrOrder = burgerElement.map((ing: TIngridientProps) => ing._id);
  arrOrder.push(bun._id);
  arrOrder.unshift(bun._id);

  function handleOrder() {
    dispatch(getOrderBurger(arrOrder));
    dispatch({
      type: LOADING_BURGER_ORDER,
      loading: true,
    });
  }

  function onClick(event: SyntheticEvent) {
    user ? handleOrder() : navigate('/login');
  }

  return (
    <>
      <div>
        <section className={`${styles.section} mt-25`}>
          <div ref={dropBunTop} data-testing='bun-top-drag'>
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
          data-testing='ing-drop'
            ref={dropIngredients}
            className={`${styles.wrap_items} mt-4 mb-4`}>
            {burgerElement.map(
              (burgerElement: TIngridientProps, index: number) => (
                <div
                  key={burgerElement.namber}
                  className={`${styles.wrap_item}`}>
                  <BurgerElement
                    index={index}
                    // @ts-ignore
                    moveCard={moveCard}
                    burgerElement={burgerElement}
                  />
                </div>
              )
            )}
          </div>

          <div ref={dropBunBottom} data-testing='bun-bottom-drag'>
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

      {orderLoading && (
        <Modal onClose={props.onClose} title={''}>
          {orderNumber ? (
            <OrderDetails orderNumber={orderNumber} />
          ) : (
            <Preloader />
          )}
        </Modal>
      )}
    </>
  );
}

export default BurgerConstructor;
