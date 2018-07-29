import React from "react";

import { Switch, Route, withRouter } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RegisterContainer, LoginContainer } from "./Authentication";
import { DashBoardContainer } from "./DashBoard";

export default ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={`/`}
          render={props => <LoginContainer {...props.history} />}
        />
        <Route
          exact
          path={`/register`}
          render={props => <RegisterContainer {...props.history} />}
        />
        <Route
          exact
          path={`/home`}
          render={props => <DashBoardContainer {...props.history} />}
        />
      </Switch>
    </BrowserRouter>
  </Provider>
);
