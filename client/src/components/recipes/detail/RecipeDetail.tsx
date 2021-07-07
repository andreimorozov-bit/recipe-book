import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Details } from './Details';
import { Ingredients } from './Ingredients';
import { Description } from './Description';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '1280px',
      margin: '0 auto',
    },

    title: {
      textAlign: 'center',
      color: theme.palette.primary.main,
      margin: '1rem auto',
      fontWeight: 500,
    },

    rootContainer: {
      marginRight: '500px',
    },
  })
);

export const RecipeDetail: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h5' className={classes.title}>
        Recipe title
      </Typography>
      <Grid
        container
        className={classes.rootContainer}
        justify='center'
        spacing={3}
      >
        <Details />
        <Ingredients />
        <Description />
      </Grid>
    </div>
  );
};
