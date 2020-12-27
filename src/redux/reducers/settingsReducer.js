import _includes from "lodash/includes";
import availableLanguages from "../../config/languages";
import { SET_LANGUAGE } from "../actionTypes";

const getDefaultLanguage = (lang) => {
  if ((_includes(availableLanguages), lang)) {
    return lang;
  } else {
    return "en";
  }
};

const initState = {
  language: getDefaultLanguage(window.navigator.language),
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
};

export default settingsReducer;
