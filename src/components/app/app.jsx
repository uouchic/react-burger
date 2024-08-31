import React, { useState, useEffect } from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const BASE_URL = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [ingridients, setIngridients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    const getIngredientsData = async () => {
      try {
        setLoading(true);
        const res = await fetch(BASE_URL);
        const ingredients = await res.json();
        setIngridients(ingredients.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getIngredientsData();
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />

      {loading ? (
        <h2 className={`${styles.mess} mt-10`}>
          Загрузка ингридиентов бургера
        </h2>
      ) : error ? (
        <h2 className={`${styles.mess} mt-10`}>
          Что-то пошло не так:<p>{error.message}</p>
        </h2>
      ) : (
        <main className={`${styles.content} pb-10`}>
          <BurgerIngredients ingridients={ingridients} />
          <BurgerConstructor />
        </main>
      )}
    </div>
  );
}

export default App;
