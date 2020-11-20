import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { history } from "./history";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" render={(props) => <Home {...props}></Home>} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
