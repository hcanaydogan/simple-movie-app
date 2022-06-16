import React, { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';

function SearchTool() {
  const [ searchText, setSearchText ] = useState('');
  const [ searchType, setSearchType ] = useState('all');

  function handleTextChange(event) {
    console.log('handleTextChange', event.target.value);
    setSearchText(event.target.value);
  }

  function handleTypeChange(event, value) {
    console.log('handleTypeChange', value);
    setSearchType(value)
  }

  function handleSearchClick(event){
    console.log('handleSearchClick', searchText, searchType);

  }

  return (
    <Toolbar sx={{ margin: '1rem 0', padding: '0.25rem 0' }}>
      <TextField
        sx={{margin: '1rem'}}
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
      <ToggleButtonGroup
        sx={{margin: '1rem'}}
        color="secondary"
        value={searchType}
        exclusive
        onChange={handleTypeChange}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="movie">Movie</ToggleButton>
        <ToggleButton value="series">Series</ToggleButton>
        <ToggleButton value="episode">Episode</ToggleButton>
      </ToggleButtonGroup>
      <Button variant="contained" color="secondary" onClick={handleSearchClick} sx={{margin: '1rem'}}>Search</Button>
    </Toolbar>
  )
}

export default SearchTool;