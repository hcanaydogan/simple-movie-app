import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchMoviesByFilters } from '../store/movies/movies.actions';
import MoviesGrid from "../components/movies/MoviesGrid";
import MoviesTable from "../components/movies/MoviesTable";
import SearchTool from '../components/search/SearchTool';

const selectMovies = state => state.movies.entities;
const selectViewModeFilter = state => state.filters.viewMode;

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies, shallowEqual);
  const viewMode = useSelector(selectViewModeFilter, shallowEqual);

  useEffect(() => {
    dispatch(fetchMoviesByFilters());
  }, []);

  return (
    <>
      <SearchTool />
      {viewMode === 'table' ?
        <MoviesTable movies={movies} />
        :
        <MoviesGrid movies={movies} />
      }
    </>
  )
}

export default Movies;