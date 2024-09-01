import React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ingredients-details.module.css';

function IngredientDetails(props) {
  return (
    <>
      <img className={`${styles.modal_img}`} src={props.ing.image} alt='' />
      <p className={`${styles.modal_name} text text_type_main-medium mt-4`}>
        {props.ing.name}
      </p>

      <div className={`${styles.modal_row} mt-8`}>
        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Калории, ккал
          </p>
          <p className='text text_type_digits-default mt-4'>
            {props.ing.calories}
          </p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Белки, г
          </p>
          <p className='text text_type_digits-default mt-4'>
            {props.ing.proteins}
          </p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Жиры, г
          </p>
          <p className='text text_type_digits-default mt-4'>{props.ing.fat}</p>
        </div>

        <div>
          <p className='text text_type_main-small text_color_inactive'>
            Углеводы, г
          </p>
          <p className='text text_type_digits-default mt-4'>
            {props.ing.carbohydrates}
          </p>
        </div>
      </div>
    </>
  );
}

IngredientDetails.propTypes = {
  ing: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.string,
    proteins: PropTypes.string,
    carbohydrates: PropTypes.string,
    fat: PropTypes.string,
  })
};

export default IngredientDetails;
