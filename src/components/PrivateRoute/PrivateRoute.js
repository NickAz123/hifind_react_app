import React from "react";
import { getCurrentUser } from "../../constants/AuthFunctions";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  return (
    <Route
      render={() => {
        return getCurrentUser() !== null ? (
          <Component />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
  //   return getCurrentUser() ? children : <Redirect to="/login" replace />;
}

export default PrivateRoute;
