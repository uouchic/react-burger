import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';
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
    <div
      className={
        props.ing
          ? `${styles.overlay} ${styles.overlay_opened}`
          : `${styles.overlay}`
      }
      onClick={overlayClose}>
        
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

export default Modal;
