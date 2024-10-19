import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import styles from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal(props) {
  const modalRoot = document.getElementById('modal');

  const overlayClose = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  useEffect(() => {
    const closeEsc = (e) => {
      if (e.key === 'Escape') props.onClose();
    };
    document.addEventListener('keydown', closeEsc);

    return () => {
      document.removeEventListener('keydown', closeEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={overlayClose}>
      <div className={`${styles.modal_ingr} pt-10 pb-15`}>
        <h2 className='text text_type_main-large ml-10'>{props.title}</h2>

        {props.children}

        <CloseIcon
          className={`${styles.modal_close}`}
          type='primary'
          onClick={props.onClose}
        />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
