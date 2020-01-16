import React, { Component } from "react";
import Select from "react-select";
import { options1, options2 } from "./data/data";
import DatePicker from "./DatePicker";
import Ready from "./Ready";

class Form extends Component {
  state = {
    selectedOption: null,
    selectedOption2: null,
    price: 0,
    extraPrice: 0,
    tireStorage: 0,
    runFlat: 0,
    sensors: 0,
    bags: 0,
    message: "",
    showDateForm: false,
    selectedDate: "",
    summaryWindow: false,
    date: ''
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  handleChange2 = selectedOption2 => {
    this.setState({ selectedOption2 }, () =>
      console.log(`Option selected:`, this.state.selectedOption2)
    );
  };

  handleOnClick = e => {
    e.preventDefault();
    if (this.state.selectedOption && this.state.selectedOption2) {
      this.setState({
        price: (this.state.price +=
          this.state.selectedOption.price + this.state.selectedOption2.price),
        extraPrice:
          this.state.tireStorage +
          this.state.runFlat +
          this.state.sensors +
          this.state.bags,
        message: `CHANGE OF ${this.state.selectedOption2.value} INCH ${
          this.state.selectedOption.value
        }, PRICE: ${this.state.price} EXTRA SERVICES: ${this.state.tireStorage +
          this.state.runFlat +
          this.state.sensors +
          this.state.bags}`
      });
    } else {
      this.setState({
        message: "INCOMPLETE DATA"
      });
    }
  };
  handleClick2 = e => {
    e.preventDefault();
    this.setState({
      tireStorage: 100
    });
  };
  handleClick3 = e => {
    e.preventDefault();
    this.setState({
      runFlat: 40
    });
  };
  handleClick4 = e => {
    e.preventDefault();
    this.setState({
      sensors: 50
    });
  };
  handleClick5 = e => {
    e.preventDefault();
    this.setState({
      bags: 10
    });
  };

  onClickDate = e => {
    e.preventDefault();
    this.setState({
      showDateForm: true
    });
  };
  handleOnValueChange = (val) => {
    this.setState({
      date: val
    })
  }
  setAppointment = () => {
    this.setState({
      summaryWindow: true
    });
    };
  render() {
    const { selectedOption, selectedOption2, showDateForm, date } = this.state;
    return (
      <form className="appointment">
        <h2>DO YOU WANT TO CHANGE WHOLE WHEELS OR JUST TIRES?</h2>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options1}
        />
        <h2>ENTER THE RIM SIZE IN INCHES</h2>
        <Select
          value={selectedOption2}
          onChange={this.handleChange2}
          options={options2}
        />
        <h2>CHOOSE EXTRA SERVICES</h2>
        <div className="buttonBox">
          <button onClick={this.handleClick2}>TIRE STORAGE + 100</button>
          <button onClick={this.handleClick3}>RUNFLAT TIRES + 40</button>
          <button onClick={this.handleClick4}>SENSORS PROGRAMMING + 50</button>
          <button onClick={this.handleClick5}>TIRE BAGS + 10</button>
        </div>
        <div className="priceBox">
          <button className="primaryButton" onClick={this.handleOnClick}>
            CHECK PRICE:
          </button>
        </div>
        <h3>{this.state.message}</h3>
        <h3>
          {this.state.message.length > 16 ? (
            <button className="primaryButton" onClick={this.onClickDate}>
              SELECT DATE
            </button>
          ) : (
            ""
          )}
        </h3>
        {showDateForm ? (
          <h3>
            <DatePicker onValueChange={this.handleOnValueChange} />
          </h3>
        ) : (
          ""
        )}
        {date? (
          <h3>
        <button className="primaryButton" onClick={this.setAppointment}>
        NEXT
        </button>
        </h3>): ""}
        {this.state.summaryWindow ? (
          <Ready
            price={this.state.price}
            extraPrice={this.state.extraPrice}
            selectedOption={selectedOption}
            selectedOption2={selectedOption2}
            date={date}
          />
        ) : (
          ""
        )}
      </form>
    );
  }
}

export default Form;
