import PropTypes from 'prop-types';

export const IngredientType = {
  image: PropTypes.string,
  name: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  carbohydrates: PropTypes.number,
  fat: PropTypes.number,
  price: PropTypes.number,
};

export type TIngridientProps = {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
  namber?: number;
};

export type TOrder = {
  _id: string;
  ingredients: Array<string>;
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
};

export default IngredientType;
