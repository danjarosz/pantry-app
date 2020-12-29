import { SET_LANGUAGE } from "../actionTypes";
import { setLanguageInLocalStorage } from "../../helpers/translations";

export const setLanguage = (language) => {
  return (dispatch) => {
    setLanguageInLocalStorage(language);
    return dispatch({
      type: SET_LANGUAGE,
      payload: {
        language,
      },
    });
  };
};
