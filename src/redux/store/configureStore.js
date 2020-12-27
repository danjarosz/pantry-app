import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import settingsReducer from "../reducers/settingsReducer";

//it allows us to apply middleware and use redux dev tools in the same time
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const create = () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      settings: settingsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};

export default create;
