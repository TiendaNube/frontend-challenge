import React, { Component } from "react";
import classname from "classname";

class InputBlock extends Component {
  static defaultProps = {
    type: "text",
  };
  render() {
    const {
      label,
      placeholder,
      className,
      name,
      type,
      onChange,
      value,
      children,
      validate,
      ...props
    } = this.props;
    let error = false;
    if (validate) {
      error = validate[name];
    }

    const classComponent = classname("input--group", className, {
      "input--group__error": error,
    });

    return (
      <div className={classComponent}>
        <label htmlFor={name}>{label}</label>
        {children}

        {error && (
          <label className="error">Necessário preenchimento do campo</label>
        )}
      </div>
    );
  }
}

export default InputBlock;
