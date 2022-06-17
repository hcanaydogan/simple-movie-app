import React, { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { viewModeChanged, searchParamsChanged } from '../../store/filters/filters.actions';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const selectViewMode = state => state.filters.viewMode;
const selectSearchText = state => state.filters.searchParams.text;
const selectSearchType = state => state.filters.searchParams.type;

function SearchTool() {
  const dispatch = useDispatch();
  const searchText = useSelector(selectSearchText, shallowEqual);
  const searchType = useSelector(selectSearchType, shallowEqual);
  const viewMode = useSelector(selectViewMode, shallowEqual);

  function handleTextChange(event) {
    console.log('handleTextChange', event.target.value);
    dispatch(searchParamsChanged({text: event.target.value}));
  }

  function handleTypeChange(event, value) {
    console.log('handleTypeChange', value);
    dispatch(searchParamsChanged({type: value}));
  }

  function handleSearchClick(event) {
    console.log('handleSearchClick', searchText, searchType);

  }
  function handleViewModeChange(event, value) {
    console.log('handleViewModeChange', value);
    if (value) {
      dispatch(viewModeChanged(value));
    };
  }

  return (
    <Toolbar sx={{ margin: '1rem 0', padding: '0.25rem 0', flexWrap: 'wrap' }}>
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
      <ToggleButtonGroup
        sx={{ margin: '1rem' }}
        color="secondary"
        value={searchType}
        exclusive
        onChange={handleTypeChange}
      >
        <ToggleButton value="">All</ToggleButton>
        <ToggleButton value="movie">Movie</ToggleButton>
        <ToggleButton value="series">Series</ToggleButton>
        <ToggleButton value="episode">Episode</ToggleButton>
      </ToggleButtonGroup>
      <Button variant="contained" color="secondary" onClick={handleSearchClick} sx={{ margin: '1rem' }}>Search</Button>

      <ToggleButtonGroup
        sx={{ margin: '1rem', marginLeft: 'auto' }}
        color="secondary"
        value={viewMode}
        exclusive
        onChange={handleViewModeChange}
      >
        <ToggleButton value="table">
          <Tooltip title="View as Table">
            <SvgIcon>
              <path d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z"></path>
            </SvgIcon>
          </Tooltip>
        </ToggleButton>
        <ToggleButton value="grid">
          <Tooltip title="View as Grid">
            <SvgIcon>
              <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"></path>
            </SvgIcon>
          </Tooltip>
        </ToggleButton>
      </ToggleButtonGroup>
    </Toolbar>
  )
}

export default SearchTool;