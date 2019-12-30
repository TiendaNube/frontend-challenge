import React, { useReducer } from "react";
import { BrowserRouter, Router } from "react-router-dom";

import { History, Routing } from "configs";
import Provider from "store/provider";
import { reducers } from "store/reducers";

function App() {
  const [store] = useReducer(reducers);
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
