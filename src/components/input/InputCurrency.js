import React, { Component } from "react";
import CurrencyInput from "react-currency-input";
import classname from "classname";
import InputBlock from "./InputBlock";

class InputCurrency extends Component {
  render() {
    const { onChange, ...props } = this.props;
    const { name } = this.props;

    return (
      <CurrencyInput
        name={name}
        id={name}
        decimalSeparator=","
        thousandSeparator="."
        onChangeEvent={onChange}
        {...props}
      />
    );
  }
}

export default InputCurrency;
