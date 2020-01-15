import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import React, { Component } from "react";
import { render } from "react-dom";

class DatePicker extends Component {
  state = {
    selectedDate: new Date()
  };

  handleDateChange = val => {
    this.props.onValueChange(val);
    this.setState({
      selectedDate: val
    })
  };

  render() {
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around" direction="column">
            <DateTimePicker
              minutesStep={30}
              ampm={false}
              value={this.state.selectedDate}
              onChange={this.handleDateChange}
              disablePast={true}
              label={'FULL OR HALF HOURS ACCEPTABLE'}
              disableToolbar={true}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
export default DatePicker;
