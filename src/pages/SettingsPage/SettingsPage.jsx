import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "1rem",
  },
}));

const SettingsPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography align="center">
        Here will be the content of the Settings
      </Typography>
    </Container>
  );
};

export default SettingsPage;
