import React from 'react';
import * as ReactDOM from 'react-dom';

import { useSelector } from '../../../utils/hook';

import { useParams } from 'react-router-dom';

import { TIngridientProps } from '../../../utils/types'


import styles from './ingredients-details.module.css';

function IngredientDetails(): React.JSX.Element {



  const { allBurgerIngredients } = useSelector(
    (store) => ({
      allBurgerIngredients: store.burgerIngredients.allBurgerIngredients,
    })
  );

  const { ingredientId } = useParams();
//@ts-ignore
  const objIng = allBurgerIngredients.filter((ing: TIngridientProps) => ing._id === ingredientId);



  return (
    <>
      <img className={`${styles.modal_img}`} src={objIng.map((ingr: TIngridientProps) => ingr.image)} alt={''} />
      <p className={`${styles.modal_name} text text_type_main-medium mt-4`}>
        {objIng.map((ingr: TIngridientProps) => ingr.name)}
      </p>

      <div className={`${styles.modal_row} mt-8`}>
        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Калории, ккал
          </p>
          <p className='text text_type_digits-default mt-4'>
            {objIng.map((ingr: TIngridientProps) => ingr.calories)}
          </p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Белки, г
          </p>
          <p className='text text_type_digits-default mt-4'>
            {objIng.map((ingr: TIngridientProps) => ingr.proteins)}
          </p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Жиры, г
          </p>
          <p className='text text_type_digits-default mt-4'>{objIng.map((ingr: TIngridientProps) => ingr.fat)}</p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Углеводы, г
          </p>
          <p className='text text_type_digits-default mt-4'>
            {objIng.map((ingr: TIngridientProps) => ingr.carbohydrates)}
          </p>
        </div>
      </div>
    </>
  );
}

export default IngredientDetails;
