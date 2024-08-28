import React from 'react';
import styles from './app-header.module.css';

import {
  Logo,
  BurgerIcon,
  ProfileIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} p-4`}>
        <div className={`${styles.row} ${styles.start}`}>
          <div className={`${styles.row} p-5 mr-2`}>
            <BurgerIcon type='primary' />
            <p className='text text_type_main-default pl-2'>Конструктор</p>
          </div>
          <div className={`${styles.row} p-5`}>
            <ListIcon type='secondary' />
            <p className='text text_type_main-default text_color_inactive pl-2'>
              Лента заказов
            </p>
          </div>
        </div>

        <Logo />

        <div className={`${styles.row} ${styles.end} p-5`}>
          <ProfileIcon type='secondary' />
          <p className='text text_type_main-default text_color_inactive pl-2'>
            Личный кабинет
          </p>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
