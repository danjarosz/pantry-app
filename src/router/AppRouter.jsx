import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path="/" component={LoginPage} />
      <PublicRoute exact path="/signup" component={SignUpPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <PrivateRoute exact path="/settings" component={SettingsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
