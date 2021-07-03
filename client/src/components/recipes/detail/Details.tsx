import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: theme.palette.primary.main,
      margin: '0.5rem auto',
    },
  })
);

export const Details: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6' className={classes.title}>
          Details
        </Typography>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='body1'>Servings: 6</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>Units: metric</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>Rating: 8/10</Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>Category: dessert</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
