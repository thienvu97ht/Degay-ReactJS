import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, compose, applyMiddleware } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
