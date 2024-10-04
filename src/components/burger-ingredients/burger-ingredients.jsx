import React, { useState } from 'react';

import { useRef } from 'react';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './burger-ingredients.module.css';

import IngredientsGroup from '../burger-ingredients/ingredients-group/ingredients-group';

import Modal from '../modal/modal';

import IngredientDetails from '../burger-ingredients/ingredients-details/ingredients-details';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
  const { allBurgerIngredients, selectBurgerIngredient } = useSelector(
    (store) => ({
      allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
      selectBurgerIngredient: store.selectBurgerIngredient,
    })
  );

  const [current, setCurrent] = useState('one');

  const tabRef = useRef();
  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  function handleScroll() {
    const coordinatesTab = tabRef.current.getBoundingClientRect().top;
    const coordinatesBun = bunRef.current.getBoundingClientRect().top;
    const coordinatesSause = sauceRef.current.getBoundingClientRect().top;
    const coordinatesMain = mainRef.current.getBoundingClientRect().top;

    if (coordinatesMain - coordinatesTab < 100) {
      setCurrent('three');
    } else if (coordinatesSause - coordinatesTab < 100) {
      setCurrent('two');
    } else if (coordinatesBun - coordinatesTab < 100) {
      setCurrent('one');
    } else {
      setCurrent('one');
    }
  }

  return (
    <>
      <div>
        <section className={`${styles.section} mt-10`}>
          <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>

          <div ref={tabRef} className={`${styles.row}`}>
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

        <section
          onScroll={handleScroll}
          className={`${styles.section2} mt-10 custom-scroll`}>
          <IngredientsGroup
            ingredientRef={bunRef}
            title={'Булки'}
            ingridients={allBurgerIngredients.filter(
              (item) => item.type === 'bun'
            )}
          />
          <IngredientsGroup
            ingredientRef={sauceRef}
            title={'Соусы'}
            ingridients={allBurgerIngredients.filter(
              (item) => item.type === 'sauce'
            )}
          />
          <IngredientsGroup
            ingredientRef={mainRef}
            title={'Начинка'}
            ingridients={allBurgerIngredients.filter(
              (item) => item.type === 'main'
            )}
          />
        </section>
      </div>

      

      {selectBurgerIngredient.image && (
        <Modal onClose={props.onClose} title={'Детали ингридиента'}>
          <IngredientDetails ing={selectBurgerIngredient} />
        </Modal>
      )}
    </>
  );
}

BurgerIngredients.propTypes = {
  onClose: PropTypes.func,
};

export default BurgerIngredients;
