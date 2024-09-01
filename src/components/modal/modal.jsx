import React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal(props) {
  return (
    <div className={`${styles.modal_ingr} pt-10 pb-15`}>
      <h2 className='text text_type_main-large ml-10'>{props.title}</h2>

      {props.children}

      <CloseIcon
        className={`${styles.modal_close}`}
        type='primary'
        onClick={props.onClose}
      />
    </div>
  );
}

export default Modal;
