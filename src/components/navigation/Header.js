import React, { Component } from "react";
import classname from "classname";

import { ButtonIcon } from "components/button";
import Breadcumbs from "./Breadcumbs";

class Header extends Component {
  render() {
    const { className } = this.props;
    const classComponent = classname("header", className);

    return (
      <div className={classComponent}>
        <ButtonIcon
          transparent
          type="secondary"
          icon="menu"
          className={"menu--button"}
          onClick={this.sidebarHandler}
        />
        <Breadcumbs />
      </div>
    );
  }
}

export default Header;
