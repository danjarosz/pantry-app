import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { 
  Box,
  Button,
  Container,
  TextField,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  Container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
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
        <Box>
          <Typography
            variant="h4"
            align="center"
          >
            Logowanie
          </Typography>
        </Box>
        <Box my={3}>
          <TextField
            label={"e-mail"}
            fullWidth={true}
            variant="outlined"
            required={true}
          />
        </Box>
        <Box my={3}>
          <TextField
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
      </Box>
    </Container>
  )
};

export default LoginPage;