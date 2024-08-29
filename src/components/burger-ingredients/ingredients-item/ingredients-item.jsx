import React from 'react';
import styles from './ingredients-item.module.css';


import {
    CurrencyIcon,
    Counter

    
} from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientsItem(props) {
  return (
    <article className={`${styles.cart}`}>

        <img className={`${styles.cart_image} ml-4`} src={props.ingridient.image} alt=''/>
          
        <div className={`${styles.row} mt-1`}>
            <p className='text text_type_digits-default mr-1'>{props.ingridient.price}</p>
            <CurrencyIcon type="primary" />
        </div>

        <p className={`${styles.cart_name} text text_type_main-default mt-2`}>{props.ingridient.name}</p>

        <Counter count={1} size="default" extraClass="m-1" />

      
    
    </article>
    
  );
}

export default IngredientsItem;