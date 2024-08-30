import React from 'react';
import styles from './burger-constructor.module.css';

import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor() {
  return (
    <div>
      <section className={`${styles.section} mt-25 pl-4`}>
        <ConstructorElement
          extraClass={'ml-8'}
          type='top'
          isLocked={true}
          text='Краторная булка N-200i (верх)'
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />

        <div className={`${styles.wrap_items} mt-4 mb-4`}>
          <div className={`${styles.wrap_item}`}>
            <DragIcon type='primary' />

            <ConstructorElement
              text='Соус традиционный галактический'
              price={15}
              thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
            />
          </div>

          <div className={`${styles.wrap_item}`}>
            <DragIcon type='primary' />

            <ConstructorElement
              text='Мясо бессмертных моллюсков Protostomia'
              price={1337}
              thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
            />
          </div>

          <div className={`${styles.wrap_item}`}>
            <DragIcon type='primary' />

            <ConstructorElement
              text='Плоды Фалленианского дерева'
              price={874}
              thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
            />
          </div>

          <div className={`${styles.wrap_item}`}>
            <DragIcon type='primary' />

            <ConstructorElement
              text='Хрустящие минеральные кольца'
              price={300}
              thumbnail={
                'https://code.s3.yandex.net/react/code/mineral_rings.png'
              }
            />
          </div>

          <div className={`${styles.wrap_item}`}>
            <DragIcon type='primary' />

            <ConstructorElement
              text='Хрустящие минеральные кольца'
              price={300}
              thumbnail={
                'https://code.s3.yandex.net/react/code/mineral_rings.png'
              }
            />
          </div>
        </div>

        <ConstructorElement
          extraClass={'ml-8 mb-10'}
          type='bottom'
          isLocked={true}
          text='Краторная булка N-200i (низ)'
          price={200}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
        />

        <div className={`${styles.wrap_btn}`}>
          <p className='text text_type_digits-medium mr-2'>610</p>

          <CurrencyIcon type='primary' />

          <Button
            htmlType='button'
            type='primary'
            size='large'
            extraClass='ml-10 mr-4'>
            Нажми на меня
          </Button>
        </div>
      </section>
    </div>
  );
}

export default BurgerConstructor;
