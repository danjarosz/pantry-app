import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import TopBar from "../../components/TopBar/TopBar";

const PublicRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = useSelector(({ auth }) => auth.uid);
    return <Route {...rest} component={(props) => (
        !isAuthenticated ? (
          <>
            <TopBar variant="public"/>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/dashboard" />
        )
    )} />
}

export default PublicRoute;