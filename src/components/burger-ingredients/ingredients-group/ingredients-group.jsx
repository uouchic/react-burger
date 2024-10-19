import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredients-group.module.css';

import IngredientsItem from '../ingredients-item/ingredients-item';

import {} from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsGroup(props) {
  return (
    <>
      <h3 className='text text_type_main-medium'>{props.title}</h3>

      <div className={`${styles.row} pt-6 pr-2 pb-10 pl-4`}>
        {props.ingridients.map((item) => (
          <IngredientsItem key={item._id} ingridient={item} />
        ))}
      </div>
    </>
  );

  IngredientsGroup.propTypes = {
    ingridients: PropTypes.array,
    title: PropTypes.string,
  };
}

export default IngredientsGroup;
