import React from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { searchParamsChanged } from '../../store/filters/filters.actions';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const selectSearchType = state => state.filters.searchParams.type;

function SearchTypesToggle() {
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType, shallowEqual);

  function handleTypeChange(event, value) {
    console.log('handleTypeChange', value);
    if (value !== null) dispatch(searchParamsChanged({ type: value }));
  }

  return (
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
  )
}

export default SearchTypesToggle;