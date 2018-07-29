import { createBrowserHistory } from "history";
import React from "react";
import config from "./config";
import { syncHistoryWithStore } from "react-router-redux";
import App from "./App.jsx";
import createStore from "./createStore";

export const Root = () => {
  const initialState = {};
  const store = createStore(initialState);

  const browserHistory = createBrowserHistory();
  const history = syncHistoryWithStore(browserHistory, store);
  return <App history={history} store={store} config={config()} />;
};

export default Root;
