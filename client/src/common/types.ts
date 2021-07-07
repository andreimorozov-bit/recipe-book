export type Unit =
  | 'gram'
  | 'pcs'
  | 'litre'
  | 'ml'
  | 'tbsp'
  | 'tsp'
  | 'can'
  | 'bottle'
  | 'oz'
  | 'lb'
  | '';

export type Ingredient = {
  name: string;
  unit: Unit;
  amount: string;
};

export type NewRecipe = {
  title: string;
  description: string;
  ingredients: Ingredient[];
  category: string;
};

export type User = {
  email: string;
  password: string;
};
