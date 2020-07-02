import React, { Component } from "react";
import InputBlockIcon from "./InputBlockIcon";
import InputCurrency from "./InputCurrency";

class InputGroupCurrencyIcon extends Component {
  render() {
    const { placeholder, type, onChange, value, ...props } = this.props;
    const { name } = this.props;

    return (
      <InputBlockIcon {...props}>
        <InputCurrency
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

export default InputGroupCurrencyIcon;
