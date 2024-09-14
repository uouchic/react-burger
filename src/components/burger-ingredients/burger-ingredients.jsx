import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';

import IngredientsGroup from '../burger-ingredients/ingredients-group/ingredients-group';

import Modal from '../modal/modal';

import ModalOverlay from '../modal-overlay/modal-overlay';

import IngredientDetails from '../burger-ingredients/ingredients-details/ingredients-details';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {

  const { allBurgerIngredients, selectBurgerIngredient } = useSelector((store) => ({
    allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
    selectBurgerIngredient: store.selectBurgerIngredient,
  }));
 

  const [current, setCurrent] = useState('one');

  return (
    <>
      <div>
        <section className={`${styles.section} mt-10`}>
          <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
          <div className={`${styles.row}`}>
            <Tab value='one' active={current === 'one'} onClick={setCurrent}>
              Булки
            </Tab>
            <Tab value='two' active={current === 'two'} onClick={setCurrent}>
              Соусы
            </Tab>
            <Tab
              value='three'
              active={current === 'three'}
              onClick={setCurrent}>
              Начинки
            </Tab>
          </div>
        </section>

        <section className={`${styles.section2} mt-10 custom-scroll`}>
          <IngredientsGroup
            title={'Булки'}
            ingridients={allBurgerIngredients.filter(
              (item) => item.type === 'bun'
            )}
          />
          <IngredientsGroup
            title={'Соусы'}
            ingridients={allBurgerIngredients.filter(
              (item) => item.type === 'sauce'
            )}
          />
          <IngredientsGroup
            title={'Начинка'}
            ingridients={allBurgerIngredients.filter(
              (item) => item.type === 'main'
            )}
          />
        </section>
      </div>

      <ModalOverlay ing={selectBurgerIngredient.image} onClose={props.onClose}>
        <Modal title={'Детали ингридиента'} onClose={props.onClose}>
          <IngredientDetails ing={selectBurgerIngredient} />
        </Modal>
      </ModalOverlay>
    </>
  );
}

BurgerIngredients.propTypes = {
  ingridients: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
  }),
};

BurgerIngredients.propTypes = {
  selectIngridient: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.string,
    calories: PropTypes.string,
    proteins: PropTypes.string,
    carbohydrates: PropTypes.string,
    fat: PropTypes.string,
  }),
};

export default BurgerIngredients;
