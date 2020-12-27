import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import LanguageIcon from "@material-ui/icons/Language";
import LanguageMenu from "./component/LanguageMenu/LanguageMenu";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: theme.spacing(2),
  },
}));

const LanguageSelector = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={handleOpenMenu}
      >
        <LanguageIcon />
      </IconButton>
      <LanguageMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      />
    </>
  );
};

export default LanguageSelector;
