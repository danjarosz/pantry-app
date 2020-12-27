import { SET_LANGUAGE } from "../actionTypes";

const initState = {};

const authReducer = (state = initState, action) => {
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

export default authReducer;
