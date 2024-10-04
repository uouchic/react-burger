import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './forgot-password.module.css';



import {
  EmailInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from '../../hooks/useForm'

import { forgot } from '../../utils/api'

function ForgotPassword() {

  const navigate = useNavigate();

  const { values, handleChange } = useForm();


  function onClick() {


    console.log(values);
    forgot(values).then((res) => {
      //console.log(res);
      navigate('/reset-password', {replace: false});
      localStorage.setItem("resetPassword", true);
    });
    
    


  }

  
  return (
    <section className={styles.contain}>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>

      <EmailInput
        name={'email'}
        onChange={handleChange}
        isIcon={false}
        placeholder={'Укажите e-mail'}
        extraClass='mb-6'
      />

      <Button extraClass='mb-20' htmlType='button' type='primary' size='medium' onClick={onClick}>
        Восстановить
      </Button>
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
    </section>
  );
}

export default ForgotPassword;
