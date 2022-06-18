import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchParamsChanged } from '../../store/filters/filters.actions';
import { debounce } from '../../utils/helpers';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';

const selectSearchText = state => state.filters.searchParams.text;
const dispatchSearchTextChangedDebounced = debounce((dispatch, value) => dispatch(searchParamsChanged({ text: value })), 400);

function SearchText() {
  const dispatch = useDispatch();
  const searchTextGlobal = useSelector(selectSearchText, shallowEqual);
  const [searchText, setSearchText] = useState(searchTextGlobal);

  function handleTextChange(event) {
    const { target: { value } } = event;
    setSearchText(value);
    dispatchSearchTextChangedDebounced(dispatch, value);
  }

  return (
    <TextField
      sx={{ margin: '1rem', flex: 1, minWidth: '40%' }}
      variant="outlined"
      color="secondary"
      value={searchText}
      onChange={handleTextChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </SvgIcon>
          </InputAdornment>
        )
      }} />
  )
}

export default SearchText;