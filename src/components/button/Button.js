import React, { Component } from "react";
import classname from "classname";

class Button extends Component {
  static defaultProps = {
    size: "normal",
    type: "primary",
  };

  render() {
    const {
      children,
      className,
      transparent,
      outline,
      type,
      block,
      size,
      clamp,
      ...props
    } = this.props;
    const classComponent = classname("button", className, {
      "button--sm": size === "small",
      "button--md": size === "medium",
      "button--lg": size === "large",
      "button--secondary": type === "secondary",
      "button--danger": type === "danger",
      "button--inverted": type === "inverted",
      "button--clamp": clamp,
      "button--block": block,
      "button--transparent": transparent,
      "button--outline": outline,
    });

    return (
      <button className={classComponent} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
