import React, { FormEvent } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './forgot-password.module.css';

import {
  EmailInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useForm } from '../../hooks/useForm';

import { forgot } from '../../utils/api';

function ForgotPassword(): React.JSX.Element {
  const navigate = useNavigate();

  const { values, handleChange } = useForm();

  function onClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    forgot(values).then((res) => {
      navigate('/reset-password', { replace: false });
      localStorage.setItem('resetPassword', 'true');
    });
  }

  return (
    <section className={styles.contain}>
      <p className='text text_type_main-medium mb-6'>Восстановление пароля</p>
      <form onSubmit={onClick} className={styles.item_center}>
        <EmailInput
          name={'email'}
          onChange={handleChange}
          isIcon={false}
          placeholder={'Укажите e-mail'}
          extraClass='mb-6'
          value={values.email}
        />

        <Button
          extraClass='mb-20'
          htmlType='submit'
          type='primary'
          size='medium'>
          Восстановить
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
    </section>
  );
}

export default ForgotPassword;
