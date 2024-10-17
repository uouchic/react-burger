import React from 'react';

import styles from './preloader.module.css';

const Preloader = (): React.JSX.Element => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__container}>
        <span className={styles.preloader__round}></span>
      </div>
    </div>
  );
};

export default Preloader;
