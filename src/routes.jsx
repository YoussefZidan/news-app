import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import { history } from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/details/:id"
          render={(props) => <Details {...props}></Details>}
        />
        <Route path="/home" render={(props) => <Home {...props}></Home>} />
        <Route
          path="/blog"
          render={(props) => (
            <h1 className="text-center p-5 vh-100">Blog Page</h1>
          )}
        />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
