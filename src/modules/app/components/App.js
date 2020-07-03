import React from "react";
import { BrowserRouter, Router } from "react-router-dom";
import { History, Routing } from "configs";
import Provider from "store/Provider";
import { reducers } from "store/reducers";

function App() {
  return (
    <Provider reducer={reducers}>
      <Router history={History}>
        <BrowserRouter basename={"/tiendanube"}>
          <Routing />
        </BrowserRouter>
      </Router>
    </Provider>
  );
}

export default App;
