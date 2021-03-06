import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Ingredient, Recipe } from '../../../common/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: theme.palette.primary.main,
      margin: '0.5rem auto',
    },
    amount: {
      fontWeight: 500,
    },
    unit: {
      fontWeight: 500,
    },
  })
);

interface IngredientsProps {
  recipe: Recipe;
  newIngredients: Ingredient[];
}

export const Ingredients: React.FC<IngredientsProps> = ({
  recipe,
  newIngredients,
}) => {
  const classes = useStyles();
  const { ingredients } = recipe;

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6' className={classes.title}>
          Ingredients
        </Typography>
        <Grid container direction='column'>
          {newIngredients?.map((ingredient, index) => {
            return (
              <Grid item key={index}>
                <Typography variant='body1'>
                  <span className={classes.amount}>{ingredient.amount}</span>{' '}
                  <span className={classes.unit}>{ingredient.unit}</span>{' '}
                  {ingredient.name}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Fragment>
  );
};
