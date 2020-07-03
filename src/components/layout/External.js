import React, { Component } from "react";

class External extends Component {
  render() {
    return (
      <div>
        Login Layout
        {this.props.children}
      </div>
    );
  }
}

export default External;
