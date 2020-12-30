import React, { useEffect } from "react";
import { firebase } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/actions/authActions";
import AppRouter, { history } from "./router/AppRouter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid));
        if (history.location.pathname === "/") {
          history.push("/dashboard");
        }
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
