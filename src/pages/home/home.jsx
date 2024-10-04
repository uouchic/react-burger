import React from 'react';

import PropTypes from 'prop-types';

import styles from './home.module.css';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';



function Home(props) {
  return (
    <main className={`${styles.content} pb-10`}>
    <BurgerIngredients onClose={props.closeModal} />
    <BurgerConstructor onClose={props.closeModalOrder} />
  </main>
    
  );
}


Home.propTypes = {
  onClose: PropTypes.func,
};

export default Home;