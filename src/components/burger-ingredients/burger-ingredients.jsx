import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './burger-ingredients.module.css';

import IngredientsGroup from '../burger-ingredients/ingredients-group/ingredients-group';

import Modal from '../modal/modal';

import ModalOverlay from '../modal-overlay/modal-overlay';

import IngredientDetails from '../burger-ingredients/ingredients-details/ingredients-details';

import {} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
  return (
    <>
      <div>
        <section className={`${styles.section} mt-10`}>
          <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
          <div className={`${styles.row}`}>
            <h2
              className={`${styles.subtitle} ${styles.shadow_bold} text text_type_main-default pt-4 pb-4`}>
              Булки
            </h2>
            <h2
              className={`${styles.subtitle} ${styles.shadow} text text_type_main-default pt-4 pb-4`}>
              Соусы
            </h2>
            <h2
              className={`${styles.subtitle} ${styles.shadow} text text_type_main-default pt-4 pb-4`}>
              Начинки
            </h2>
          </div>
        </section>

        <section className={`${styles.section2} mt-10 custom-scroll`}>
          <IngredientsGroup
            onIngClick={props.onIngClick}
            title={'Булки'}
            ingridients={props.ingridients.filter(
              (item) => item.type === 'bun'
            )}
          />
          <IngredientsGroup
            onIngClick={props.onIngClick}
            title={'Соусы'}
            ingridients={props.ingridients.filter(
              (item) => item.type === 'sauce'
            )}
          />
          <IngredientsGroup
            onIngClick={props.onIngClick}
            title={'Начинка'}
            ingridients={props.ingridients.filter(
              (item) => item.type === 'main'
            )}
          />
        </section>
      </div>

      <ModalOverlay ing={props.selectIngridient.image} onClose={props.onClose}>
        <Modal title={'Детали ингридиента'} onClose={props.onClose}>
          <IngredientDetails ing={props.selectIngridient} />
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
  })
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
  })
};


export default BurgerIngredients;
