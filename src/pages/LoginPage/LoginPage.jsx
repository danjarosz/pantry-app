import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik, Field, Form } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import useTranslation from "../../hooks/useTranslation";
import { startLogin } from "../../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  Link: {
    color: theme.palette.primary.main,
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const loginWithGoogle = () => {
    dispatch(startLogin());
  };

  return (
    <Container maxWidth="xs">
      <Box>
        <Formik>
          <Form>
            <Box my={3}>
              <Field
                component={TextField}
                label={t("loginpage.label.email")}
                fullWidth={true}
                variant="outlined"
                required={true}
              />
            </Box>
            <Box my={3}>
              <Field
                component={TextField}
                label={t("loginpage.label.password")}
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
              {t("loginpage.button.login")}
            </Button>
          </Form>
        </Formik>
        <Box my={3}>
          <Typography>
            {t("loginpage.message.part.one")}
            <Link to="/signup" className={classes.Link}>
              {t("here")}
            </Link>
            , {t("loginpage.message.part.two")}
          </Typography>
        </Box>
        <Box my={3}>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            fullWidth={true}
            onClick={loginWithGoogle}
          >
            {t("loginpage.button.login.google")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
