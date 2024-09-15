import React from 'react';
import PropTypes from 'prop-types';

import IngredientType from '../../../utils/types' 

import styles from './ingredients-group.module.css';

import IngredientsItem from '../ingredients-item/ingredients-item';

import {} from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsGroup(props) {
  return (
    <>
      <h3 ref={props.ingredientRef} className='text text_type_main-medium'>{props.title}</h3>

      <div className={`${styles.row} pt-6 pr-4 pb-10 pl-2`}>
        {props.ingridients.map((item) => (
          <IngredientsItem
            key={item._id}
            ingridient={item}
          />
        ))}
      </div>
    </>
  );
}

IngredientsGroup.propTypes = {
  title: PropTypes.string,
  ingridients: PropTypes.shape(IngredientType)
};

export default IngredientsGroup;
