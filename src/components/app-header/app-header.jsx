import React from 'react';
import styles from './app-header.module.css';

import { NavLink } from 'react-router-dom';

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
          <NavLink to='/' className={`${styles.row} p-5 mr-2`}>
            {({ isActive }) => (
              <>
                <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
                <p
                  className={
                    isActive
                      ? 'text text_type_main-default pl-2'
                      : 'text text_type_main-default text_color_inactive pl-2'
                  }>
                  Конструктор
                </p>
              </>
            )}
          </NavLink>
          <NavLink to='/feed' className={`${styles.row} p-5`}>
            {({ isActive }) => (
              <>
                <ListIcon type={isActive ? 'primary' : 'secondary'} />
                <p
                  className={
                    isActive
                      ? 'text text_type_main-default pl-2'
                      : 'text text_type_main-default text_color_inactive pl-2'
                  }>
                  Лента заказов
                </p>
              </>
            )}
          </NavLink>
        </div>

        <Logo />

        <NavLink to='/profile' className={`${styles.row} ${styles.end} p-5`}>
          {({ isActive }) => (
            <>
              <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
              <p
                className={
                  isActive
                    ? 'text text_type_main-default pl-2'
                    : 'text text_type_main-default text_color_inactive pl-2'
                }>
                Личный кабинет
              </p>
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
}

export default AppHeader;
