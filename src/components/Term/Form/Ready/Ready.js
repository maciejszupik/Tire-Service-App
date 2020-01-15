import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Ready extends Component {
  constructor(props) {
    super(props);
  }
  get styles(){
    return({
        width: '100%',
        margin: '0 auto',
        height: '100vh',
        backgroundColor: '#3f8aec',
        position: 'absolute',
        top: 0,
        opacity: 0.9
    })
}
  render() {
    const { price, extraPrice, selectedOption, selectedOption2 } = this.props;
    return (
      <div style={this.styles}>
        <h1> YOUR APPOINTMENT INFO </h1>
        <h2>RANGE OF SERVICES: CHANGE OF {selectedOption2.value} INCH {selectedOption.value}</h2>
        <h2> CENA {price} </h2>
        <h2>Usługi dodatkowe {extraPrice}</h2>
        <h2>SUMMARY: {price + extraPrice}</h2>
        <NavLink to="/#" className="mainLinks">
            <button className='primaryButton'>MAIN PAGE</button>
          </NavLink>
        
      </div>
    );
  }
}

export default Ready;
