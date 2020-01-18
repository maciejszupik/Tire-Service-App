import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

const MENU_URL = "http://localhost:3001/term";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

class Ready extends Component {
  state = {
    price: this.props.price + this.props.extraPrice,
    data: this.props.date,
    service: this.props.selectedOption.value,
    size: this.props.selectedOption2.value,
    number: {
      value: "",
      error: false
    }
  };

  componentDidMount() {
    fetch(MENU_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("błąd");
      })
      .then(items => this.setState({ items }));
  }
  onClick = e => {
    const { price, data, service, size, number } = this.state;
    fetch("http://localhost:3001/term", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price,
        data,
        service,
        size,
        number: number.value
      })
    });
  };
  handleOnChange = e => {
    if (e.target.value.length !== 9) {
      this.setState({
        number: {
          value: e.target.value,
          error: "9 characters required"
        }
      });
    } else {
      this.setState({
        number: {
          value: e.target.value,
          error: false
        }
      });
    }
  };
  render() {
    const {
      price,
      extraPrice,
      selectedOption,
      selectedOption2,
      date
    } = this.props;
    return (
      <div className="readyStyle">
        <div className="appointmentInfo">
          <h1> YOUR APPOINTMENT INFO </h1>
          <h2>
            RANGE OF SERVICES: CHANGE OF {selectedOption2.value} INCH{" "}
            {selectedOption.value}
          </h2>
          <h2>PRICE {price} PLN </h2>
          <h2>PRICE FOR EXTRA SERVICES {extraPrice} PLN</h2>
          <h2>SUMMARY: {price + extraPrice} PLN</h2>
          <h2>
            DATE: {date.getDate()} {months[date.getMonth()]}{" "}
            {date.getFullYear()}
          </h2>
          <h2>
            HOUR:{" "}
            {date.getHours() < 10
              ? `0${date.getHours()}`
              : `${date.getHours()}`}
            :
            {date.getMinutes() < 10
              ? `0${date.getMinutes()}`
              : `${date.getMinutes()}`}{" "}
          </h2>
          <h2>PHONE NUMBER:</h2>

          <TextField
            value={this.state.number.value}
            id="filled-number"
            label="Number"
            type="number"
            error={!!this.state.number.error}
            onChange={this.handleOnChange}
            helperText={this.state.number.error}
            variant="filled"
          />

          <h3>
              {this.state.number.value.length === 9?
            <NavLink to="/#" className="mainLinks">
              <button className="primaryButton" onClick={this.onClick}>
                SET AN APPOINTMENT AND RETURN TO MENU
              </button>
            </NavLink>
            :
            ""
              }

          </h3>
        </div>
      </div>
    );
  }
}

export default Ready;
