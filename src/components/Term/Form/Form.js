import React, { Component } from "react";

// import Ready from './Ready'

import Select from "react-select";

import { options1, options2} from "./data/data";


class Form extends Component {
  state = {
    selectedOption: null,
    selectedOption2: null,
    price: 0,
    tireStorage: 0,
    runFlat: 0,
    sensors: 0,
    bags: 0,
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
    if(this.state.selectedOption && this.state.selectedOption2){
    this.setState(prevState => ({
      price: this.state.price += this.state.selectedOption.price + this.state.selectedOption2.price ,
      message: `CHANGE OF ${this.state.selectedOption2.value} INCH ${this.state.selectedOption.value}, PRICE: ${this.state.price} EXTRA SERVICES: ${this.state.tireStorage + this.state.runFlat + this.state.sensors + this.state.bags}`   
    }))  
  }else{
    this.setState(prevState => ({
      message: 'INCOMPLETE DATA'
    }))  
  }
  }
  handleClick2 = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      tireStorage: 100
    }))
    console.log(this.state.price)
  }
  handleClick3 = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      runFlat: 40
    }))
    console.log(this.state.price)
  }
  handleClick4 = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      sensors: 50
    }))
    console.log(this.state.price)
  }
  handleClick5 = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      bags: 10
    }))
    console.log(this.state.price)
  }
  render() {
    const { selectedOption, selectedOption2 } = this.state;

    return (
      <form className='appointment'>
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
        <div className='buttonBox'>
          <button onClick={this.handleClick2}>TIRE STORAGE + 100</button>
          <button onClick={this.handleClick3}>RUNFLAT TIRES + 40</button>
          <button onClick={this.handleClick4}>SENSORS PROGRAMMING + 50</button>
          <button onClick={this.handleClick5}>TIRE BAGS + 10</button>
          
        </div>
        <div className='priceBox'>
              <button className='priceButton' onClick={this.handleOnClick}>CHECK PRICE:</button>
        </div>       
                <h1>{this.state.message}</h1>
      </form>
    );
  }
}

export default Form;


