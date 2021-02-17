import "./App.css";
import routes from "./rootRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import PrivateRoute from "./HOC/PrivateRouter";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading ....</div>}>
        <Switch>
          {routes.map((route, index) => {
            if (route.public)
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            return <PrivateRoute h="hello" {...route} key={index} />;
          })}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
