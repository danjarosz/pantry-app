import React from "react";
import { useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useTranslation from "../../hooks/useTranslation";
import BackButton from "../BackButton/BackButton";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Navigation from "../Navigation/Navigation";

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
  const { t } = useTranslation();

  const isLoginPage = useRouteMatch("/");
  const isSignUpPage = useRouteMatch("/signup");
  const isDashboardPage = useRouteMatch("/dashboard");
  const isSettingsPage = useRouteMatch("/settings");

  let title = t("title.app");

  if (isLoginPage && isLoginPage.isExact) {
    title = t("title.login");
  } else if (isSignUpPage && isSignUpPage.isExact) {
    title = t("title.signup");
  } else if (isDashboardPage && isDashboardPage.isExact) {
    title = t("title.pantries");
  } else if (isSettingsPage && isSettingsPage.isExact) {
    title = t("title.settings");
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
