import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { ProductList, ProductForm } from "modules/product";
import { Logged, External } from "components/layout";

const Routing = () => (
  <Switch>
    <Route
      exact
      path={"/products"}
      render={(routerProps) => (
        <Logged>
          <div className="products-background">
            <ProductList {...routerProps} />
          </div>
        </Logged>
      )}
    />

    <Route
      path={"/products/new"}
      render={(routerProps) => (
        <Logged>
          <ProductForm {...routerProps} />
        </Logged>
      )}
    />

    <Route
      path={"/products/edit/:id"}
      render={(routerProps) => (
        <Logged>
          <ProductForm {...routerProps} />
        </Logged>
      )}
    />

    <Redirect to={"/products"} />
  </Switch>
);

export default Routing;
