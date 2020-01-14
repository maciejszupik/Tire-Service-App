import React, { Component } from "react";
// import Ready from './Ready'

import Select from "react-select";

import { options1, options2} from "./data/data";


class Form extends Component {
  state = {
    selectedOption: null,
    selectedOption2: null,
    price: 0,
    message: ''
  };
  
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  handleChange2 = selectedOption2 => {
    this.setState(
      { selectedOption2 },
      () => console.log(`Option selected:`, this.state.selectedOption2)
    );
  };

  handleOnClick = (e) => {
    e.preventDefault();
    this.state.price += this.state.selectedOption.price;
    this.state.price += this.state.selectedOption2.price;
    this.setState(prevState => ({
      message: `wybór1 + ${this.state.selectedOption.value} // 
      wybór2 + ${this.state.selectedOption2.value} // cena ${this.state.price}`
      
    }))
    
  }
  render() {
    const { selectedOption, selectedOption2 } = this.state;

    return (
      <>
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
              <button onClick={this.handleOnClick}>BUTTON</button>
              <h1>{this.state.message}</h1>
      </>
    );
  }
}

export default Form;
