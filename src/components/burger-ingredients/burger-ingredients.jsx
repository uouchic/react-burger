import React from 'react';
import styles from './burger-ingredients.module.css';

import IngredientsGroup from '../burger-ingredients/ingredients-group/ingredients-group';

import {} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredients(props) {
  return (
    <>
      <section className={`${styles.section} pt-10`}>
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

      <section className={`${styles.section2} pt-10 custom-scroll`}>
        <IngredientsGroup title={'Булки'} ingridients={props.ingridients.filter((item) => item.type === 'bun')}/>
        <IngredientsGroup title={'Соусы'} ingridients={props.ingridients.filter((item) => item.type === 'sauce')}/>
        <IngredientsGroup title={'Начинка'} ingridients={props.ingridients.filter((item) => item.type === 'main')}/>
      </section>
    </>
  );
}

export default BurgerIngredients;
