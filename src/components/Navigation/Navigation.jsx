import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { startLogout } from "../../redux/actions/authActions";
import useTranslation from "../../hooks/useTranslation";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  logo: {
    textTransform: "uppercase",
  },
  link: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "700",
  },
}));

const Navigation = ({ variant }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const privateMenuItems = [
    {
      type: "link",
      label: t("navigation.item.dashboard"),
      navigateTo: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      type: "link",
      label: t("navigation.item.settings"),
      navigateTo: "/settings",
      icon: <SettingsIcon />,
    },
    {
      type: "button",
      label: t("navigation.item.logout"),
      icon: <ExitToAppIcon />,
      onClick: () => {
        dispatch(startLogout());
        history.push("/");
      },
    },
  ];

  const publicMenuItems = [
    {
      type: "link",
      label: t("navigation.item.login"),
      navigateTo: "/",
      icon: <ExitToAppIcon />,
    },
    {
      type: "link",
      label: t("navigation.item.signup"),
      navigateTo: "/signup",
      icon: <LockOpenIcon />,
    },
  ];

  const getNavItems = (list) =>
    list.map((item) => {
      const { type, label, navigateTo, icon, onClick } = item;

      const baseItemEl = (
        <ListItem button key={label} onClick={onClick} className={classes.link}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{label}</ListItemText>
        </ListItem>
      );

      let itemEl = baseItemEl;

      if (type === "link") {
        itemEl = (
          <Link key={label} to={navigateTo} className={classes.link}>
            {baseItemEl}
          </Link>
        );
      }

      return itemEl;
    });

  let navItems = [];

  switch (variant) {
    case "private":
      navItems = getNavItems(privateMenuItems);
      break;
    case "public":
      navItems = getNavItems(publicMenuItems);
      break;
    default:
      navItems = [];
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
          <Typography variant="h6" className={classes.logo}>
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
      <Drawer anchor="left" open={open} onClose={closeDrawer}>
        {list}
      </Drawer>
    </>
  );
};

export default Navigation;
