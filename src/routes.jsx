import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={"loading..."}>
          <Route path="/" render={(props) => <Home {...props}></Home>} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
