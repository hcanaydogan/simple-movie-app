import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchMoviesByFilters } from '../../store/movies/movies.actions';
import { searchParamsChanged } from '../../store/filters/filters.actions';
import SearchText from './SearchText';
import SearchTypesToggle from './SearchTypesToggle';
import SearchViewToggle from './SearchViewToggle';
import SearchYear from './SearchYear';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

function SearchTool() {
  const dispatch = useDispatch();

  function handleSearchClick() {
    dispatch(searchParamsChanged({page: 1}));
    dispatch(fetchMoviesByFilters());
  }
  
  return (
    <Toolbar sx={{ margin: '1rem 0', padding: '0.25rem 0', flexWrap: 'wrap' }}>
      <SearchText />
      <SearchTypesToggle />
      <SearchYear />
      <Button variant="contained" color="secondary" onClick={handleSearchClick} sx={{ margin: '1rem' }}>Search</Button>
      <SearchViewToggle />
    </Toolbar>
  )
}

export default SearchTool;