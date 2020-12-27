import { SET_LANGUAGE } from "../actionTypes";
import languages from "../../translations";

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
      translations: languages[language],
    },
  };
};
