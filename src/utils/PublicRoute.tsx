import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from '../AuthContext';

interface PublicRouteProps extends RouteProps {
  component: any;
}

const PublicRoute = (props: PublicRouteProps) => {
  const { component: Component, ...rest } = props;
  const { authInfo } = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authInfo.user.admin.toString() === "False" ? (
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
