import React, { Suspense } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Suspense fallback={"loading..."}>
          <Route path="/x" render={(props) => <h1>x</h1>} />
          <Route path="/" exact render={(props) => <h1>Home</h1>} />
        </Suspense>
      </Switch>
    </Router>
  );
};

export default Routes;
