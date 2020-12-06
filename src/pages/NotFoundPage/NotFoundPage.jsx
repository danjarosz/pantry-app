import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@material-ui/core";

const NotFoundPage = () => {
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);
  const [counter, setCounter] = useState(5);
  const isAuthenticated = useSelector(({ auth }) => auth.uid);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCounter(prevValue => prevValue - 1);
    }, [1000]);

    return () => {
      clearTimeout(timerID);
    }
  }, []);

  useEffect(() => {
    if (counter === 0) {
      setRedirect(true);
    }
  }, [counter])

  let component = (
    <Container maxWidth="xs">
      <Box my={3}>
        <Typography align="center">
          Strona nie została znaleziona. Zostaniesz przekierowany do poprzedniej strony za {counter} sekund
        </Typography>
      </Box>
    </Container>
  )

  if (redirect) {
    if (history.length <= 2) {
      history.goBack();
    } else {
      const redirectTo = isAuthenticated ? "/dashboard" : "/"
      component = <Redirect to={redirectTo} />
    }
  }

  return component;
};

export default NotFoundPage;