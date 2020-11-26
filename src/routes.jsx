import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";
import AllNews from "./pages/allNews";

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/details/:id"
        render={(props) => <Details {...props}></Details>}
      />
      <Route path="/home" render={(props) => <Home {...props} />} />
      <Route path="/news" render={(props) => <AllNews {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default Routes;
