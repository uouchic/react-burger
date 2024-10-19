import React from 'react';
import { Link } from 'react-router-dom';
import styles from './register.module.css';

import { useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm'

import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { registerUser } from '../../services/actions/userAuth';

function Register() {

  const dispatch = useDispatch();

  const { values, handleChange } = useForm();

  function onClick(event) {
    event.preventDefault();
    dispatch(registerUser(values));
  }

  return (
    <section className={styles.contain}>
      <p className='text text_type_main-medium mb-6'>Регистрация</p>
      <form onSubmit={onClick} className={styles.item_center}>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={handleChange}
        icon={false}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass='mb-6'
        value={values.name}
      />
      <EmailInput onChange={handleChange} name={'email'} isIcon={false} extraClass='mb-6' value={values.email} />
      <PasswordInput onChange={handleChange} name={'password'} extraClass='mb-6' value={values.password} />
      <Button extraClass='mb-20' htmlType='submit' type='primary' size='medium'>
        Зарегистрироваться
      </Button>
      </form>
      <div className={`${styles.wraptext} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Уже зарегистрированны?
        </p>
        <Link
          to='/login'
          className={`${styles.link_color} text text_type_main-default`}>
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
