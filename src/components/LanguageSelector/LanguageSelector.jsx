import React from 'react';
import { makeStyles } from "@material-ui/styles";
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: theme.spacing(2),
  }
}));

const LanguageSelector = () => {
  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="menu"
    >
      <LanguageIcon />
    </IconButton>
  )
}

export default LanguageSelector;