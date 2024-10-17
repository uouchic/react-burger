import React from 'react';

import styles from './home.module.css';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';

type THomeProps = {
  closeModal: () => void;
  closeModalOrder: () => void;
};

function Home(props: THomeProps): React.JSX.Element {

  return (
    <main className={`${styles.content} pb-10`}>
      <BurgerIngredients onClose={props.closeModal} />
      <BurgerConstructor onClose={props.closeModalOrder} />
    </main>
  );
}

export default Home;
