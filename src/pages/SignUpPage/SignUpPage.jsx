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
import useTranslation from "../../hooks/useTranslation";

const useStyles = makeStyles((theme) => ({
  Link: {
    color: theme.palette.primary.main,
  },
}));

const SignUpPage = () => {
  const { t } = useTranslation();
  const classes = useStyles();

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
              />
            </Box>
            <Box my={3}>
              <Field
                component={TextField}
                label={t("loginpage.label.password")}
                fullWidth={true}
                variant="outlined"
                required={true}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth={true}
              type="submit"
            >
              {t("signuppage.button.signup")}
            </Button>
          </Form>
        </Formik>
        <Box my={3}>
          <Typography>
            {t("signuppage.message.part.one")}
            <Link to="/" className={classes.Link}>
              {t("here")}
            </Link>
            , {t("signuppage.message.part.two")}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
