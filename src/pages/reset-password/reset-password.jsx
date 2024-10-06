import React from 'react';
import { Link } from 'react-router-dom';
import styles from './reset-password.module.css';

import { Navigate, useNavigate } from 'react-router-dom';

import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from '../../hooks/useForm';

import { reset } from '../../utils/api';

function ResetPassword() {

 const navigate = useNavigate();

  const { values, handleChange } = useForm();

  function onClick(event) {
    event.preventDefault();
    reset(values).then((res) => {
      localStorage.removeItem('resetPassword');
      navigate('/login');
      
    });
  }


  return (

    localStorage.getItem("resetPassword") ? 
    <section className={styles.contain}>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>

      <form onSubmit={onClick} className={styles.item_center}>

      <PasswordInput
        placeholder={'Введите новый пароль'}
        name={'password'}
        onChange={handleChange}
        extraClass='mb-6'
        value={values.password}
      />
      <Input
        type={'text'}
        onChange={handleChange}
        placeholder={'Введите код из письма'}
        icon={false}
        name={'token'}
        error={false}
        errorText={'Ошибка'}
        size={'default'}
        extraClass='mb-6'
        value={values.token}
      />

      <Button
        extraClass='mb-20'
        htmlType='submit'
        type='primary'
        size='medium'>
        Сохранить
      </Button>

      </form>

      <div className={`${styles.wraptext} mb-4`}>
        <p className='text text_type_main-default text_color_inactive mr-2'>
          Вспомнили пароль?
        </p>
        <Link
          to='/login'
          className={`${styles.link_color} text text_type_main-default`}>
          Войти
        </Link>
      </div>
    </section> : <Navigate to='/forgot-password' />




  );
}

export default ResetPassword;
