import React, { PureComponent } from "react";
import classname from "classname";

class Grid extends PureComponent {
  render() {
    const {
      transparent,
      block,
      children,
      className,
      nopadding,
      ...props
    } = this.props;
    const classComponent = classname("grid", className, {
      "grid--nopadding": nopadding,
      "grid--transparent": transparent,
      "grid--block": block,
    });

    return (
      <div className={classComponent} {...props}>
        {children}
      </div>
    );
  }
}

export default Grid;
