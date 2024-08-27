import React from 'react';
import appHeaderStyles from './app-header.module.css';

import {
  Logo,
  BurgerIcon,
  CheckMarkIcon,
  ProfileIcon,
  ListIcon

} from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeader() {
  return (
    <div className={appHeaderStyles.appheader}>
      <div className={appHeaderStyles.wrap}>
        <BurgerIcon type='primary' />
        <p className='text text_type_main-default'>Конструктор</p>

        <ListIcon type="secondary" />
        <p className='text text_type_main-default'>Лента заказов</p>
      </div>

      <Logo />

     
      <div className={appHeaderStyles.wrap}>
        <ProfileIcon type="secondary" />
        <p className='text text_type_main-default'>Личный кабинет</p>

      </div>


    </div>
  );
}

export default AppHeader;
