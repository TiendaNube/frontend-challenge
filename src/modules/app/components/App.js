import React, { Component } from "react";
import { BrowserRouter, Router } from "react-router-dom";

import { History, Routing } from "configs";

class App extends Component {
  render() {
    return (
      <Router history={History}>
        <BrowserRouter basename={"/tiendanube"}>
          <Routing />
        </BrowserRouter>
      </Router>
    );
  }
}

export default App;
