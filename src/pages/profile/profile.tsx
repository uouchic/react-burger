import React, {ChangeEvent, SyntheticEvent} from "react";

import styles from './profile.module.css';

import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { updateUser } from '../../services/actions/userAuth';

import { logoutUser } from '../../services/actions/userAuth';

function Profile(): React.JSX.Element {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => ({
    //@ts-ignore
    user: store.userRegister.user,
  }));

  const [values, setValues] = React.useState({ ...user, password: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  function onClick(event: SyntheticEvent) {
    event.preventDefault();
    //@ts-ignore
    dispatch(updateUser(values));
  }

  function onClickExit() {
    //@ts-ignore
    dispatch(logoutUser());
  }

  function onCancel() {
    setValues({ ...user, password: '' });
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

      <form onSubmit={onClick}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          //@ts-ignore
          icon={false}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
          onChange={handleChange}
          value={values.name}
        />
        <EmailInput
          name={'email'}
          isIcon={false}
          extraClass='mb-6'
          onChange={handleChange}
          value={values.email}
        />
        <PasswordInput
          name={'password'}
          extraClass='mb-6'
          onChange={handleChange}
          value={values.password}
        />
        {values.name !== user.name ||
        values.email !== user.email ||
        values.password ? (
          <div className={styles.but_wrap}>
            <Button htmlType='button' type='secondary' size='medium' onClick={onCancel}>
              Отмена
            </Button>

            <Button
              htmlType='submit'
              type='primary'
              size='medium'>
              Сохранить
            </Button>
          </div>
        ) : (
          <></>
        )}
      </form>
    </main>
  );
}

export default Profile;
