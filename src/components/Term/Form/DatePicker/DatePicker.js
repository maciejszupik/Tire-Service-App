import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState } from "react";

const DatePicker = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  
  return (
      <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around" direction="column">
        <DateTimePicker
          autoOk
          minutesStep={15}
          ampm={false}
          value={selectedDate}
          onChange={handleDateChange}
          label="Wybierz datę i godzinę wizyty"
        />
      </Grid>
    </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePicker;



