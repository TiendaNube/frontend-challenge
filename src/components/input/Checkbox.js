import React, { Component } from "react";
import classname from "classname";

class Checkbox extends Component {
  render() {
    const { label, className, name, ...props } = this.props;
    const classComponent = classname("check--container", className);

    return (
      <label htmlFor={name} className={classComponent}>
        {label}
        <input type="checkbox" id={name} {...props} />
        <span className="check" />
      </label>
    );
  }
}

export default Checkbox;
