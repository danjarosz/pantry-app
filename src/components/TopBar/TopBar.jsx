import React from "react";
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import BackButton from "../BackButton/BackButton";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Navigation from "../Navigation/Navigation";
import useTranslation from "../../redux/selectors/useTranslation";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ variant }) {
  const classes = useStyles();

  const isLoginPage = useRouteMatch("/");
  const isSignUpPage = useRouteMatch("/signup");
  const isDashboardPage = useRouteMatch("/dashboard");

  const titleApp = useTranslation("title.app");
  const titleLogin = useTranslation("title.login");
  const titleSignUp = useTranslation("title.signup");
  const titlePantries = useTranslation("title.pantries");
  let title = titleApp;

  if (isLoginPage && isLoginPage.isExact) {
    title = titleLogin;
  } else if (isSignUpPage && isSignUpPage.isExact) {
    title = titleSignUp;
  } else if (isDashboardPage && isDashboardPage.isExact) {
    title = titlePantries;
  }

  // <BackButton />
  let rightButton = <BackButton />;
  if (variant !== "private") {
    rightButton = <LanguageSelector />;
  }

  // Render
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Navigation variant={variant} />
            <Typography variant="h6" className={classes.title} align="center">
              {title}
            </Typography>
            {rightButton}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
