import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import Page from "./page";

const App = () => (
  <Provider store={store}>
    <Page />
  </Provider>
);

export default App;
