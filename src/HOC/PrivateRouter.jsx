import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const tokenRef = useRef(window.localStorage.getItem("token"));
  const token = window.localStorage.getItem("token");
  // console.log(token);
  // console.log({ ...rest });
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
