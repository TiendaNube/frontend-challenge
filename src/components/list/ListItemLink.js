import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ListItem from "./ListItem";

class ListItemLink extends Component {
  render() {
    const { to, ...props } = this.props;

    return (
      <NavLink exact to={to}>
        <ListItem {...props} />
      </NavLink>
    );
  }
}

export default ListItemLink;
