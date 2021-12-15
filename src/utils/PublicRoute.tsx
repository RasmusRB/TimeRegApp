import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { getToken } from "./Common";

interface PublicRouteProps extends RouteProps {
  component: any;
}

const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !getToken() ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
