import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => {
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage}/>
        <PublicRoute exact path="/dashboard" component={DashboardPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
}

export default AppRouter;