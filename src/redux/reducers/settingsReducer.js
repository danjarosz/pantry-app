import _includes from "lodash/includes";
import availableLanguages from "../../config/languages";
import translations from "../../translations";
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
  language: getDefaultLanguage(window.navigator.language),
  translations: translations[getDefaultLanguage(window.navigator.language)],
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
        translations: action.payload.translations,
      };
    default:
      return state;
  }
};

export default settingsReducer;
