import React from "react";
import { Menu, MenuItem } from "@material-ui/core";
import { useDispatch } from "react-redux";
import availableLanguages from "../../../../config/languages";
import { setLanguage } from "../../../../redux/actions/settingsActions";

const LanguageMenu = ({ onClose, ...props }) => {
  const dispatch = useDispatch();

  const languages = Object.keys(availableLanguages).map((key) => {
    return {
      value: availableLanguages[key].shortName,
      name: availableLanguages[key].fullName,
    };
  });

  const handleItemClick = (value) => {
    dispatch(setLanguage(value));
    onClose();
  };

  const menuItems = languages.map((language) => {
    const { value, name } = language;
    return (
      <MenuItem key={value} onClick={() => handleItemClick(value)}>
        {name}
      </MenuItem>
    );
  });

  return (
    <Menu onClose={onClose} {...props}>
      {menuItems}
    </Menu>
  );
};

export default LanguageMenu;
