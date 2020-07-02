import React, { Component } from "react";
import classname from "classname";
import { Link } from "react-router-dom";

class Breadcumbs extends Component {
  render() {
    const { className } = this.props;
    const classComponent = classname("breadcumbs", className);

    const CurrentBreadcumb = () => {
      return window.location.pathname.includes("edit") ? (
        <a href="#">Edit Product</a>
      ) : (
        <a href="#">Add Product</a>
      );
    };

    return (
      <ul className={classComponent}>
        <li>
          <Link to={"/products"}>My Products</Link>
        </li>
        <li>
          <CurrentBreadcumb />
        </li>
      </ul>
    );
  }
}

export default Breadcumbs;
