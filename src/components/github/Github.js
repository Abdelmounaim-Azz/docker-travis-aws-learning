import React from "react";
import { Dashboard, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GithubProvider } from "./context/context";

function Github() {
  return (
    <>
      <GithubProvider>
        <Router>
          <Switch>
            <Route path="/" exact={true}>
              <Dashboard></Dashboard>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </GithubProvider>
    </>
  );
}

export default Github;
