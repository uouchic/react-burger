import React from 'react';

import PropTypes from 'prop-types';

import styles from './profile.module.css';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { updateUser } from '../../services/actions/userAuth';

import { logoutUser } from '../../services/actions/userAuth';

function Profile() {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => ({
    user: store.userRegister.user,
  }));

  const { values, handleChange } = useForm();

  function onClick() {
    dispatch(updateUser(values));
  }

  function onClickExit() {
    dispatch(logoutUser());
  }

  return (
    <main className={`${styles.content} pb-10`}>
      <div className={`${styles.wrap_link}`}>
        <NavLink
          to='/profile'
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.link_active} text text_type_main-medium mt-4 mb-4`
              : `${styles.link} text text_type_main-medium text_color_inactive mt-4 mb-4`
          }>
          Профиль
        </NavLink>
        <NavLink
          to='/profile/orders'
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.link_active} text text_type_main-medium mt-4 mb-4`
              : `${styles.link} text text_type_main-medium text_color_inactive mt-4 mb-4`
          }>
          История заказов
        </NavLink>
        <NavLink
          onClick={onClickExit}
          to='/'
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.link_active} text text_type_main-medium mt-4 mb-4`
              : `${styles.link} text text_type_main-medium text_color_inactive mt-4 mb-4`
          }>
          Выход
        </NavLink>
      </div>

      <div>
        <Input
          defaultValue={user.name}
          type={'text'}
          placeholder={'Имя'}
          icon={false}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
          onChange={handleChange}
        />
        <EmailInput
          defaultValue={user.email}
          name={'email'}
          isIcon={false}
          extraClass='mb-6'
          onChange={handleChange}
        />
        <PasswordInput
          name={'password'}
          extraClass='mb-6'
          onChange={handleChange}
        />
        {values.name || values.email || values.password ? (
          <div className={styles.but_wrap}>
            <Button htmlType='button' type='secondary' size='medium'>
              Отмена
            </Button>

            <Button
              htmlType='button'
              type='primary'
              size='medium'
              onClick={onClick}>
              Сохранить
            </Button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}

export default Profile;
