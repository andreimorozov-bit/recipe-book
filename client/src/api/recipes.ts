import axios from 'axios';
import { NewRecipe } from '../common/types';

export const createRecipe = async (recipe: NewRecipe) => {
  const response = await axios.post('http://localhost:5000/recipes', recipe);
  return response.data;
};
