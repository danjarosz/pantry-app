import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "1rem",
  },
}));

const DashboardPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography align="center">
        Here will be the content of the Dashboard
      </Typography>
    </Container>
  );
};

export default DashboardPage;
