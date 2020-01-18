import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  get styles() {
    return {
      
    };
  }

  render() {
    return (
      <div className='naviStyle'>
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
