import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Typography } from "@material-ui/core";
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
        <Box my={3}>
          <Typography>The place for the form.</Typography>
        </Box>
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
