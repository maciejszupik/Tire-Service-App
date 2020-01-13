import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  get styles() {
    return {
      minHeight: "100px",
      margin: "0 auto",
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
      marginTop: 50
    };
  }

  render() {
    return (
      <div style={this.styles}>
        <NavLink to="/" className="mainLinks">
          HOME
        </NavLink>
        <NavLink to="/services" className="mainLinks">
          SERVICES
        </NavLink>
        <NavLink to="/contact" className="mainLinks">
          CONTACT
        </NavLink>
        <NavLink to="/term" className="mainLinks">
          SET AN APPOINTMENT
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
