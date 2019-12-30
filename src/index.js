import React from "react";
import ReactDOM from "react-dom";
import "./configs/Styles/index.scss";

import { App } from "modules/app";
import Provider from "store/provider";
import { reducers } from "store/reducers";

ReactDOM.render(
  <>
    <Provider reducer={reducers} persist>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
