import React from 'react';

import IngredientDetails from '../../components/burger-ingredients/ingredients-details/ingredients-details'

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';


import styles from './ingredientView.module.css';

function IngredientView() {

    const { allBurgerIngredients } = useSelector(
        (store) => ({
          allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
        })
      );

      const { ingredientId } = useParams();

      const objIng = allBurgerIngredients.filter((ing) => ing._id === ingredientId);


    return (
        <section className={styles.contain}>
            {objIng.map((ingr) => <IngredientDetails ing={ingr} />)}

            {/* <IngredientDetails ing={objIng[0]} /> */}
        </section>
    );
}

export default IngredientView;
