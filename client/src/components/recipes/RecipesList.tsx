import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getRecipes } from '../../api/recipes';
import { Recipe } from '../../common/types';
import { RecipesListItem } from './RecipesListItem';

export const RecipesList: React.FC = () => {
  const [cookies, setCookies, deleteCookies] = useCookies(['jwtToken']);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getRecipes(cookies.jwtToken);
      setRecipes(response);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return <RecipesListItem recipe={recipe} />;
      })}
    </div>
  );
};
