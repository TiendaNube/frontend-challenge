import React, { Component } from "react";
import classname from "classname";
import Button from "./Button";

class ButtonIcon extends Component {
  static defaultProps = {
    pos: "left",
  };

  render() {
    const { children, className, icon, pos, ...props } = this.props;
    const iconClass = classname("icon", `icon-${icon}`);
    const classComponent = classname(className, {
      "button--icon__left": pos === "left",
      "button--icon__right": pos === "right",
    });

    return (
      <Button className={classComponent} {...props}>
        {pos === "left" && <i className={iconClass} />}
        {children && <div className="text">{children}</div>}
        {pos === "right" && <i className={iconClass} />}
      </Button>
    );
  }
}

export default ButtonIcon;
