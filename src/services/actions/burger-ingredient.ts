export const SELECT_BURGER_INGREDIENT: 'SELECT_BURGER_INGREDIENT' = 'SELECT_BURGER_INGREDIENT';
export const DELETE_BURGER_INGREDIENT: 'DELETE_BURGER_INGREDIENT' = 'DELETE_BURGER_INGREDIENT';


export interface ISelectBurgerIngredientAction {
    readonly type: typeof SELECT_BURGER_INGREDIENT;
    readonly name: string, proteins: number, fat: number, carbohydrates: number, calories: number, image: string;
                
    
  }

  export interface IDeleteBurgerIngredientAction {
    readonly type: typeof DELETE_BURGER_INGREDIENT;
    
  }


  export type TBurgerIngredientActions =
  | ISelectBurgerIngredientAction
  | IDeleteBurgerIngredientAction;