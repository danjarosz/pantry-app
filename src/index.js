import React from "react";
import ReactDOM from "react-dom";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/store/configureStore";
import ThemeProvider from "./theme/ThemeProvider";

export const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Call the element loader after the app has been rendered the first time
defineCustomElements(window);
