import React, {useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchMoviesBySearch } from '../store/movies/movies.actions';
import MoviesGrid from "../components/movies/MoviesGrid";
import SearchTool from '../components/search/SearchTool';

const selectMovies = state => state.movies.entities;

function Movies() {
  const dispatch = useDispatch();
  const searchParams = useSelector(state => state.search, shallowEqual);
  const movies = useSelector(selectMovies, shallowEqual);
  
  useEffect(() => {
    dispatch(fetchMoviesBySearch(searchParams));
  }, []);
  
  return (
    <>
      <SearchTool />
      <MoviesGrid movies={movies} />
    </>
  )
}

export default Movies;