import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { 
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik, Field, Form } from 'formik';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Container: {
    minHeight: "100vh"
  },
  Link: {
    color: theme.palette.primary.main
  }
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="xs"
      className={classes.Container}
    >
      <Box>
        <Formik>
          <Form>
            <Box my={3}>
              <Field 
                component={TextField}
                label={"e-mail"}
                fullWidth={true}
                variant="outlined"
                required={true}
              />
            </Box>
            <Box my={3}>
              <Field 
                component={TextField}
                label={"hasło"}
                fullWidth={true}
                variant="outlined"
                required={true}
                type="password"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={true}
              type="submit"
            >
              Zaloguj się
            </Button>
          </Form>
        </Formik>
        <Box my={3}>
          <Typography>
            Jeśli nie masz konta możesz założyć je klikając <Link to="/signup" className={classes.Link}>tutaj</Link>, lub możesz zalogować się za pomocą Twojego konta Google.
          </Typography>
        </Box>
        <Box my={3}>
          <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth={true}
            >
              Zaloguj się z Google
            </Button>
        </Box>
      </Box>
    </Container>
  )
};

export default LoginPage;