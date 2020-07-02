import React, { PureComponent } from "react";
import classname from "classname";

class Input extends PureComponent {
  static defaultProps = {
    type: "text",
  };
  render() {
    const { label, placeholder, className, name, ...props } = this.props;
    const classComponent = classname("input", className);

    return <input name={name} id={name} placeholder={placeholder} {...props} />;
  }
}

export default Input;
