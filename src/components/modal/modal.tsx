import React, { MouseEvent } from 'react';
import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';

import styles from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type TModal = {
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

function Modal(props: TModal): React.JSX.Element {
  const modalRoot = document.getElementById('modal')!;

  const overlayClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  useEffect(() => {
    const closeEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') props.onClose();
    };
    document.addEventListener('keydown', closeEsc);

    return () => {
      document.removeEventListener('keydown', closeEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={overlayClose} data-testing='close-overlay'>
      <div className={`${styles.modal_ingr} pt-10 pb-15`}>
        <h2 className='text text_type_main-large ml-10'>{props.title}</h2>

        {props.children}

        <div data-testing='close-cross' className={`${styles.modal_close}`}>
          <CloseIcon type='primary' onClick={props.onClose} />
        </div>
      </div>
    </div>,

    modalRoot
  );
}

export default Modal;
