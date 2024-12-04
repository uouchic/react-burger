import React, { useState } from 'react';

import { useRef } from 'react';

import { useSelector } from '../../utils/hook';

import styles from './burger-ingredients.module.css';

import IngredientsGroup from './ingredients-group/ingredients-group';

import { TIngridientProps } from '../../utils/types'

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

type TBurgerIngredients = {
  onClose: () => void;
};


function BurgerIngredients(props: TBurgerIngredients): React.JSX.Element {

  const { allBurgerIngredients } = useSelector(
    (store) => ({
      allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
    })
  );

  const [current, setCurrent] = useState('one');

  const tabRef = useRef<HTMLDivElement>(null!);
  const bunRef = useRef<HTMLHeadingElement>(null!);
  const sauceRef = useRef<HTMLHeadingElement>(null!);
  const mainRef = useRef<HTMLHeadingElement>(null!);


  

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
            //@ts-ignore
            ingridients={allBurgerIngredients.filter(
              (item: TIngridientProps) => item.type === 'bun'
            )}
          />
          <IngredientsGroup
          
            ingredientRef={sauceRef}
            title={'Соусы'}
            //@ts-ignore
            ingridients={allBurgerIngredients.filter(
              (item: TIngridientProps) => item.type === 'sauce'
            )}
          />
          <IngredientsGroup
          
            ingredientRef={mainRef}
            title={'Начинка'}
            //@ts-ignore
            ingridients={allBurgerIngredients.filter(
              (item: TIngridientProps) => item.type === 'main'
            )}
          />
        </section>
      </div>


    </>
  );
}


export default BurgerIngredients;
