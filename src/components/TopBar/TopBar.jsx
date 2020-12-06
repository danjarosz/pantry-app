import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar,Typography} from '@material-ui/core';
import BackButton from "../BackButton/BackButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <BackButton />
          <Typography
            variant="h6"
            className={classes.title}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
