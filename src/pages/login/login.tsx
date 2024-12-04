import React, { FormEvent } from "react";
import { Link } from 'react-router-dom';
import styles from './login.module.css';

import { useDispatch } from '../../utils/hook';

import { useForm } from '../../hooks/useForm';

import { loginUser } from '../../services/actions/userAuth';

import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Login(): React.JSX.Element {
  const dispatch = useDispatch();

  const { values, handleChange } = useForm();

  function onClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(loginUser(values));
  }

  return (
    <section className={styles.contain}>
      <p className='text text_type_main-medium mb-6'>Вход</p>
      <form onSubmit={onClick} className={styles.item_center}>
        <EmailInput
          onChange={handleChange}
          name={'email'}
          isIcon={false}
          extraClass='mb-6'
          value={values.email}
        />
        <PasswordInput
          onChange={handleChange}
          name={'password'}
          extraClass='mb-6'
          value={values.password}
        />
        <Button
          extraClass='mb-20'
          htmlType='submit'
          type='primary'
          size='medium'>
          Войти
        </Button>
      </form>
      <div className={`${styles.wraptext} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Вы новый пользователь?
        </p>
        <Link
          to='/register'
          className={`${styles.link_color} text text_type_main-default`}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.wraptext}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Забыли пароль?
        </p>
        <Link
          to='/forgot-password'
          className={`${styles.link_color} text text_type_main-default`}>
          Восстановить пароль
        </Link>
      </div>
    </section>
  );
}

export default Login;
