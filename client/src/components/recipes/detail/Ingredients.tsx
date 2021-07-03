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

export const Ingredients: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant='h6' className={classes.title}>
          Ingredients
        </Typography>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='body1'>200g ingedient 1</Typography>
          </Grid>
          <Grid item>
            {' '}
            <Typography variant='body1'>120g ingedient 2</Typography>
          </Grid>
          <Grid item>
            {' '}
            <Typography variant='body1'>60g ingedient 3</Typography>
          </Grid>
          <Grid item>
            {' '}
            <Typography variant='body1'>40ml ingedient 4</Typography>
          </Grid>
          <Grid item>
            {' '}
            <Typography variant='body1'>2pc ingedient 5</Typography>
          </Grid>
          <Grid item>
            {' '}
            <Typography variant='body1'>1pc ingedient 6</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
