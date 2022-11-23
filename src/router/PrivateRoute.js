import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
  );
};

export default PrivateRoute;
