import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from '../AuthContext';

interface PrivateRouteProps extends RouteProps {
  component: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;
  const { authInfo } = useAuth();

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        authInfo.user.admin.toString() === "True" ? (
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

export default PrivateRoute;
