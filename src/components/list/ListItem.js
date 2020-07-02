import React, { Component } from "react";
import classname from "classname";

class ListItem extends Component {
  render() {
    const { children, className, icon } = this.props;
    const classComponent = classname("listitem", className);

    return (
      <li className={classComponent}>
        {icon && <i className={`icon icon-${icon}`} />}
        <div className="text"> {children} </div>
        <i className="icon icon-right mt--sm" />
      </li>
    );
  }
}

export default ListItem;
