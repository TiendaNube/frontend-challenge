import React, { Component } from "react";
import classname from "classname";
import InputBlock from "./InputBlock";

class InputBlockIcon extends Component {
  state = {
    focus: false,
  };

  onFocus = () => {
    this.setState({
      focus: true,
    });
  };

  onBlur = () => {
    this.setState({
      focus: false,
    });
  };

  render() {
    const {
      placeholder,
      type,
      onChange,
      value,
      className,
      icon,
      children,
      ...props
    } = this.props;
    const { name } = this.props;
    const { focus } = this.state;
    const classComponent = classname(className, {
      focus: focus,
    });

    return (
      <InputBlock className={classComponent} {...props}>
        <div
          className="input--group--block"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <div className="icon"> {icon} </div>
          {children}
        </div>
      </InputBlock>
    );
  }
}

export default InputBlockIcon;
