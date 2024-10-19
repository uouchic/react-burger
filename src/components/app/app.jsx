import React, { useState } from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

import { INGREDIENTS } from '../../utils/data';

function App() {
  const [ingridients, setIngridients] = useState(INGREDIENTS);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={`${styles.content} pb-10`}>
        <BurgerIngredients ingridients={ingridients} />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
