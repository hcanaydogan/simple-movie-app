import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchParamsChanged } from '../../store/filters/filters.actions';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from "@mui/material";

const selectYear = ({ filters: { searchParams: { year } } }) => {
  if (year === null) return year;
  return moment().year(year);
};

function SearchYear() {
  const dispatch = useDispatch();
  const year = useSelector(selectYear, shallowEqual);

  function handleYearChange(momentDate) {
    dispatch(searchParamsChanged({ year: momentDate ? momentDate.year() : null}));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Release Year"
        views={['year']}
        value={year}
        onChange={handleYearChange}
        renderInput={(params) =>  <DatePickerInput {...params} handleYearChange={handleYearChange}/>}
      />
    </LocalizationProvider>
  )
}

function DatePickerInput({handleYearChange, ...props}) {
  props.inputProps.onChange = () => {};
  return (
    <FormControl
      sx={{width: '150px'}}
    >
      <TextField {...props} disabled sx={{WebkitTextFillColor: 'black', color: 'black'}}/>
      <Button variant="text" onClick={()=>handleYearChange(null)} sx={{position: 'absolute', fontSize: '0.6rem', transform: 'translateY(100%)', bottom: 0, right: '-5px', color: 'crimson'}}>Clear Year</Button>
    </FormControl>
  )
}

export default SearchYear;
