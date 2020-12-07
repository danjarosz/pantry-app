import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Link: {
    color: theme.palette.primary.main
  }
}));

const SignUpPage = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xs"
    >
      <Box>
        <Box my={3}>
          <Typography>The place for the form.</Typography>
        </Box>
        <Box my={3}>
            <Typography>
              Jeśli posiadasz już konto, kliknij <Link to="/" className={classes.Link}>tutaj</Link>, aby przejść do strony logowania.
            </Typography>
          </Box>
      </Box>
      
    </Container>
  )
};

export default SignUpPage;