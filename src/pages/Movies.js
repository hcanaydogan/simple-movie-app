import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchMoviesByFilters } from '../store/movies/movies.actions';
import MoviesGrid from "../components/movies/MoviesGrid";
import MoviesTable from "../components/movies/MoviesTable";
import SearchTool from '../components/search/SearchTool';

const selectMovies = state => state.movies;
const selectViewModeFilter = state => state.filters.viewMode;

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies, shallowEqual);
  const viewMode = useSelector(selectViewModeFilter, shallowEqual);

  useEffect(() => {
    console.log('use effect',movies);
    dispatch(fetchMoviesByFilters());
  }, []);

console.log(movies)
  return (
    <>
      <SearchTool />
      {movies.status !== 'error' ? (
        viewMode === 'table' ?
          <MoviesTable movies={movies.entities} loading={movies.status === 'loading'} />
          :
          <MoviesGrid movies={movies.entities} loading={movies.status === 'loading'} />
      ) : <p>Error while fetching movies.</p>
      }
    </>
  )
}

export default Movies;