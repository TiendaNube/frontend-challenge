import React, { Component } from "react";
import classname from "classname";

class Image extends Component {
  render() {
    const { bg } = this.props;
    const classComponent = classname("background-image", {
      "bg--empty": !bg,
    });

    let style = {};

    if (bg) {
      style = { backgroundImage: `url(${bg})` };
    }

    return (
      <div className={classComponent} style={style}>
        {!bg && <i className="icon icon-camera" />}
      </div>
    );
  }
}

export default Image;
