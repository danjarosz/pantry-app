import _includes from "lodash/includes";
import availableLanguages from "../../config/languages";
import { getLanguageFromLocalStorage } from "../../helpers/translations";
import { SET_LANGUAGE } from "../actionTypes";

const getDefaultLanguage = (lang) => {
  const languages = Object.keys(availableLanguages);
  if (_includes(languages, lang)) {
    return lang;
  } else {
    return "en";
  }
};

const initState = {
  language:
    getLanguageFromLocalStorage() ||
    getDefaultLanguage(window.navigator.language),
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
