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

export const Description: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item xs={12} md={6}>
        <Typography variant='h6' className={classes.title}>
          Description
        </Typography>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='body1'>
              1 first step description
              blalas;jk;asdfjkp;oefjk;sdfljksdpfjpasp'dfoj
              dfghfghfghfghfghdfghdfghdfghfdghdfghdfghdfg
              hdfghdfghdfghdfghdfghdfghdfghdfghdfghdfghdfgh dfghdfghdfghfg
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              2 second step description
              blalas;jk;asdfjkp;oefjk;sdfljksdpfjpasp'dfoj
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              3 third step description
              blalas;jk;asdfjkp;oefjk;sdfljksdpfjpasp'dfoj
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              5 fifth step description
              blalas;jk;asdfjkp;oefjk;sdfljksdpfjpasp'dfoj
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1'>
              6 sixth step description
              blalas;jk;asdfjkp;oefjk;sdfljksdpfjpasp'dfoj
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
