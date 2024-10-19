import React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import IngredientType from '../../../utils/types'


import styles from './ingredients-details.module.css';

function IngredientDetails() {



  const { allBurgerIngredients } = useSelector(
    (store) => ({
      allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
    })
  );

  const { ingredientId } = useParams();

  const objIng = allBurgerIngredients.filter((ing) => ing._id === ingredientId);



  return (
    <>
      <img className={`${styles.modal_img}`} src={objIng.map((ingr) => ingr.image)} alt={''} />
      <p className={`${styles.modal_name} text text_type_main-medium mt-4`}>
        {objIng.map((ingr) => ingr.name)}
      </p>

      <div className={`${styles.modal_row} mt-8`}>
        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Калории, ккал
          </p>
          <p className='text text_type_digits-default mt-4'>
            {objIng.map((ingr) => ingr.calories)}
          </p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Белки, г
          </p>
          <p className='text text_type_digits-default mt-4'>
            {objIng.map((ingr) => ingr.proteins)}
          </p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Жиры, г
          </p>
          <p className='text text_type_digits-default mt-4'>{objIng.map((ingr) => ingr.fat)}</p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Углеводы, г
          </p>
          <p className='text text_type_digits-default mt-4'>
            {objIng.map((ingr) => ingr.carbohydrates)}
          </p>
        </div>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  ing: PropTypes.shape(IngredientType)
};

export default IngredientDetails;
