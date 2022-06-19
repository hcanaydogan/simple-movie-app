import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchMoviesByFilters } from '../store/movies/movies.actions';
import { searchParamsChanged } from '../store/filters/filters.actions';
import MoviesGrid from "../components/movies/MoviesGrid";
import MoviesTable from "../components/movies/MoviesTable";
import SearchTool from '../components/search/SearchTool';
import Pagination from '@mui/material/Pagination';

const selectMovies = state => state.movies;
const selectViewModeFilter = state => state.filters.viewMode;
const selectPageFilter = state => state.filters.searchParams.page;

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies, shallowEqual);
  const viewMode = useSelector(selectViewModeFilter, shallowEqual);
  const page = useSelector(selectPageFilter, shallowEqual);
  const totalPages = Math.ceil(movies.totalResults / 10);

  useEffect(() => {
    dispatch(fetchMoviesByFilters());
  }, []);

  function handlePageChange(event, value){
    dispatch(searchParamsChanged({page: value}));
    dispatch(fetchMoviesByFilters());
  }

  return (
    <>
      <SearchTool />
      {movies.status !== 'error' ? (
        <>
          {viewMode === 'table' ? <MoviesTable movies={movies.entities} loading={movies.status === 'loading'} /> : <MoviesGrid movies={movies.entities} loading={movies.status === 'loading'} />}
          {totalPages > 1 && <Pagination count={totalPages} page={page} onChange={handlePageChange} sx={{display: 'flex', justifyContent: 'center', margin: '2rem'}}/>}
        </>
      ) : <p>{movies.errorMessage}</p>
      }
    </>
  )
}

export default Movies;