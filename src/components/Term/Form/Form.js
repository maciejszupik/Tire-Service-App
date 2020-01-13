import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Ready from './Ready'

import Select from "react-select";
import { options1, options2, options3 } from "./data/data";

import makeAnimated from "react-select/animated";
const animatedComponents = makeAnimated();

const arr = [];
let price = 0;

//--------------------------------------------------------
class Example extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
    arr[2] = date.getDate();
    arr[3] = date.getMonth() + 1;
    arr[4] = date.getFullYear();
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
//--------------------------------------------------------

class Form extends Component {
  state = {
    selectedOption1: null,
    selectedOption2: null,
    isTrue: false,
    selectedOption3: [],
    message: "",
    runFlat: false,
    hotel: false
  };

  handleOnChange1 = selectedOption1 => {
    this.setState({ selectedOption1 }, () => {
      arr[0] = this.state.selectedOption1.value; 
    });
  };
  handleOnChange2 = selectedOption2 => {
      this.setState({ selectedOption2 }, () => {
        arr[1] = this.state.selectedOption2.value;   
    });
  };
  handleOnChange3 = val => {
    this.setState(state => {
      state.selectedOption3 = val;
     // console.log(val)
      return state;
    });
  };

  handleOnClickButton = e => {
    e.preventDefault();
    if(this.state.selectedOption1 != null && this.state.selectedOption2 != null){
    price += this.state.selectedOption2.price;
    price += this.state.selectedOption1.price;
    this.setState(prevState => ({
        isTrue: true
      }));
    }    

    
  };

  render() {
    const {
      selectedOption1,
      selectedOption2,
      isTrue,
      selectedOption3,
      message
    } = this.state;

    return (
      <form>
        koła / opony
        <Select
          value={selectedOption1}
          options={options1}
          onChange={this.handleOnChange1}
        />
        rozmiar
        <Select
          value={selectedOption2}
          options={options2}
          onChange={this.handleOnChange2}
        />
        Dodatkowe usługi
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={options3}
          onChange={this.handleOnChange3}
          value={this.selectedOption3}
        />
        <p>wybierz date</p>
        <Example />
        <button onClick={this.handleOnClickButton}>SUBMIT</button>
        {isTrue?(<Ready service={arr} price={price}/>): 'wypelnij dane'}
        
      </form>
    );
  }
}

export default Form;
