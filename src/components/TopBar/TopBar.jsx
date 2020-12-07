import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  Toolbar,
  Typography
} from '@material-ui/core';
import BackButton from "../BackButton/BackButton";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ variant }) {
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
  
  // <BackButton />
  let backButton = <BackButton />
  if (variant !== "private") {
    backButton = null;
  }

  // Render
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth={"lg"}>
          <Toolbar>
            {backButton}
            <Typography
              variant="h6"
              className={classes.title}
              align="center"
            >
              {title}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
