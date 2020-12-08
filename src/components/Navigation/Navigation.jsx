import React, { useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  logo: {
    textTransform: "uppercase"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main
  }
}));

const Navigation = ({ variant }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  }

  const closeDrawer = () => {
    setOpen(false);
  }

  const privateMenuItems = [
    {
      type: "link",
      label: "Twoje spiżarnie",
      navigateTo: "/dashboard"
    },
    { 
      type: "link",
      label: "Ustawienia",
      navigateTo: "/settings"
    },
    {
      type: "button",
      label: "Wyloguj się"
    }
  ]

  const publicMenuItems = [
    { 
      type: "link",
      label: "Logowanie",
      navigateTo: "/"
    },
    {
      type: "link",
      label: "Rejestracja",
      navigateTo: "/signup"
    }
  ]

  const getNavItems = (list) => list.map(item => {
    const { type, label, navigateTo } = item;

    let itemEl = (
      <Link
        key={navigateTo}
        to={navigateTo}
        className={classes.link}
      >
        <ListItem
          button
        >
          <ListItemText
            color="primary"
          >
            {label}
          </ListItemText>
        </ListItem>
      </Link>
    )

    if (type === "button") {
      <ListItem
          button
        >
          <ListItemText
            color="primary"
          >
            {label}
          </ListItemText>
      </ListItem>
    }


    return itemEl
  })

  let navItems = [];

  switch (variant) {
    case "private":
      navItems = getNavItems(privateMenuItems);
      break;
    case "public":
      navItems = getNavItems(publicMenuItems);
      break;
    default:
      navItems = []
  }

  const list = (
    <div
      className={classes.list}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <List>
        <ListItem>
          <Typography
            variant="h6"
            className={classes.logo}
          >
            Pantry App
          </Typography>
        </ListItem>
        <Divider />
        {navItems}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        onClick={openDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer 
        anchor="left"
        open={open}
        onClose={closeDrawer}
      >
        {list}
    </Drawer>
    </>
  );
}

export default Navigation;