import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const isLoginPage = useRouteMatch("/");
  const isSignUpPage = useRouteMatch("/signup");
  const isDashboardPage = useRouteMatch('/dashboard');

  let title = "Pantry App";

  if (isLoginPage && isLoginPage.isExact) {
    title = "Logowanie"
  } else if (isSignUpPage && isSignUpPage.isExact) {
    title = "Rejestracja"
  } else if ( isDashboardPage && isDashboardPage.isExact) {
    title = "Spiżarnie"
  }

  console.log(isLoginPage, isSignUpPage, isDashboardPage)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
