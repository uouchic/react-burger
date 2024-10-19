import React from 'react';

import IngredientDetails from '../../components/burger-ingredients/ingredients-details/ingredients-details'

import styles from './ingredientView.module.css';

function IngredientView(): React.JSX.Element {

    return (
        <section className={styles.contain}>
            <IngredientDetails />
        </section>
    );
}

export default IngredientView;
