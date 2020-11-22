import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" render={(props) => <Home {...props}></Home>} />
      <Route path="/blog" render={(props) => <h1 className="text-center p-5">Blog Page</h1>} />
      <Redirect from="/" exact to="/home" />
    </Switch>
  );
};

export default Routes;
