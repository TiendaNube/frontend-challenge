import React, { Component } from "react";
import InputBlockIcon from "./InputBlockIcon";
import Input from "./Input";

class InputGroupIcon extends Component {
  render() {
    const { placeholder, type, onChange, value, ...props } = this.props;
    const { name } = this.props;

    return (
      <InputBlockIcon {...props}>
        <Input
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </InputBlockIcon>
    );
  }
}

export default InputGroupIcon;
