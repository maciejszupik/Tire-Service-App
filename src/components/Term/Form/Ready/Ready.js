import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const MENU_URL = 'http://localhost:3000'
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

class Ready extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    items: []
  }

  componentDidMount(){
    fetch(MENU_URL)
      .then(res => {
        if (res.ok){
          return res.json()
        }
        throw new Error('błąd')
      })
      .then(items => this.setState({items}))
  }

  get styles() {
    return {
      width: "100%",
      margin: "0 auto",
      height: "100vh",
      backgroundColor: "#3f8aec",
      opacity: 0.9
    };
  }
  render() {
    const { price, extraPrice, selectedOption, selectedOption2, items, date } = this.props;
    return (
      <div style={this.styles}>
        <div className="appointmentInfo">
          <h1> YOUR APPOINTMENT INFO </h1>
          <h2>
            RANGE OF SERVICES: CHANGE OF {selectedOption2.value} INCH{" "}
            {selectedOption.value}
          </h2>
          <h2>PRICE {price} PLN </h2>
          <h2>PRICE FOR EXTRA SERVICES {extraPrice} PLN</h2>
          <h2>SUMMARY: {price + extraPrice} PLN</h2>
          <h2>DATE: {date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</h2>
          <h2>HOUR: {date.getHours()<10? `0${date.getHours()}`: `${date.getHours()}` }:{date.getMinutes()<10? `0${date.getMinutes()}`: `${date.getMinutes()}`  }   </h2>

          </div>
          <h3>
           <NavLink to="/#" className="mainLinks">
            <button className="primaryButton">SET AN APPOINTMENT AND RETURN TO MENU</button>
          </NavLink>
          </h3>
          
        
      </div>
    );
  }
}

export default Ready;
