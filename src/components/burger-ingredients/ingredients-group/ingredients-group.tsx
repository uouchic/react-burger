import React, { HTMLAttributes, Ref, LegacyRef } from 'react';

import styles from './ingredients-group.module.css';

import IngredientsItem from '../ingredients-item/ingredients-item';

import {} from '@ya.praktikum/react-developer-burger-ui-components';

import { TIngridientProps } from '../../../utils/types';

type TIngredientsGroup = {
  ingridients: TIngridientProps[];
  title: string;
  ingredientRef: LegacyRef<HTMLHeadingElement>;
};

function IngredientsGroup(props: TIngredientsGroup): React.JSX.Element {

  return (
    <>
      <h3
        ref={props.ingredientRef}
        className='text text_type_main-medium'>
        {props.title}
      </h3>

      <div className={`${styles.row} pt-6 pr-4 pb-10 pl-2`}>
        {props.ingridients.map((item: TIngridientProps) => (
          <IngredientsItem key={item._id} ingridient={item} />
        ))}
      </div>
    </>
  );
}

export default IngredientsGroup;
