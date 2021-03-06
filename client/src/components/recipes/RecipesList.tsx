import { useState } from 'react';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getRecipes } from '../../api/recipes';
import { Recipe } from '../../common/types';
import { RecipesListItem } from './RecipesListItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '1100px',
      margin: '0 auto',
    },
  })
);

export const RecipesList: React.FC = () => {
  const classes = useStyles();
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
    <div className={classes.root}>
      {recipes.map((recipe) => {
        console.log(recipe);
        return <RecipesListItem key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};
