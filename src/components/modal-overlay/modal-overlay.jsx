import React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

function ModalOverlay(props) {
  const modalRoot = document.getElementById('root');

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
      {props.children}
    </div>,
    modalRoot
  );
}

export default ModalOverlay;
