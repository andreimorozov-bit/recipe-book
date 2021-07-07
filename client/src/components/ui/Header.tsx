import React, { Fragment, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tabContainer: {
      marginLeft: 'auto',
    },

    logo: {
      color: theme.palette.common.white,
      boxShadow: 'none',
      textTransform: 'none',
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
      },
    },

    tab: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      fontSize: '1rem',
      minWidth: '100px',
    },

    button: {
      borderRadius: '50px',
      marginLeft: '50px',
    },
  })
);

export const Header: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    }
    if (window.location.pathname === '/newrecipe' && value !== 1) {
      setValue(1);
    }
    if (
      (window.location.pathname === '/signin/google' ||
        window.location.pathname === '/signin/email') &&
      value !== 2
    ) {
      setValue(2);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleLogoClick = () => {
    history.push('/');
    setValue(0);
  };

  const handleMouseLeave = (event: any) => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <div className={classes.logo} onClick={handleLogoClick}>
            <Typography variant='h5'>Recipe Book</Typography>
          </div>

          <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor='primary'
          >
            <Tab className={classes.tab} label='Home' component={Link} to='/' />
            <Tab
              className={classes.tab}
              label='My Recipies'
              component={Link}
              to='/recipies'
            />
            <Tab
              className={classes.tab}
              label='Recipe'
              component={Link}
              to='/recipies/2'
            />
            <Tab
              className={classes.tab}
              label='Create New'
              component={Link}
              to='/newrecipe'
            />
            <Tab
              className={classes.tab}
              label='Sign Up'
              component={Link}
              to='/signup/email'
            />
            <Tab
              className={classes.tab}
              label='Sign In'
              component={Link}
              to='/signin/email'
            />
            <Tab
              className={classes.tab}
              label='Sign Out'
              component={Link}
              to='/signout'
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
};
