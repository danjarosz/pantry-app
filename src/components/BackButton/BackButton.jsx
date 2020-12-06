import React from 'react';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  }
}));

const BackButton = () => {
  const classes = useStyles();
  const history = useHistory();

  if (history.length <= 2) {
    return null;
  }

  const handleButtonClick = () => {
    history.goBack();
  }

  return (
    <IconButton
      aria-label="go-back"
      edge="start"
      className={classes.menuButton}
      onClick={handleButtonClick}
    >
      <ArrowBackIcon />
    </IconButton>
  )
}

export default BackButton;