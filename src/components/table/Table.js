import React, { PureComponent } from "react";
import classname from "classname";

class Table extends PureComponent {
  render() {
    const { className } = this.props;
    const classComponent = classname("table--container", className);

    return (
      <div className={classComponent}>
        <table>{this.props.children}</table>
      </div>
    );
  }
}

export default Table;
