import React, { Component } from "react";
import InputBlock from "./InputBlock";
import Input from "./Input";

class InputGroup extends Component {
  render() {
    const { placeholder, type, onChange, value, ...props } = this.props;
    const { name } = this.props;

    return (
      <InputBlock {...props}>
        <Input
          name={name}
          id={name}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
      </InputBlock>
    );
  }
}

export default InputGroup;
