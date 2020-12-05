import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import TopBar from "../components/TopBar/TopBar";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import DashboardPage from "../pages/DashboardPage/DashboardPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
      <TopBar />
      <Switch>
        <PublicRoute exact path="/" component={LoginPage}/>
        <PublicRoute exact paths="/signup" component={SignUpPage}/>
        <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
  </Router>
);

export default AppRouter;