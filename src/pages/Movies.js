import React, {useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { fetchMovies } from '../store/movies/movies.actions';
import MoviesGrid from "../components/movies/MoviesGrid";
import SearchTool from '../components/search/SearchTool';

const selectMovieImdbIDs = state => state.movies.entities.map(movie => movie.imdbID);

function Movies() {
  const dispatch = useDispatch();
  const searchParams = useSelector(state => state.search, shallowEqual);
  const movieImdbIDs = useSelector(selectMovieImdbIDs, shallowEqual);

  useEffect(() => {
    console.log('useEffect Main');
    dispatch(fetchMovies(searchParams));
  });
  
  return (
    <>
      <SearchTool />
      <MoviesGrid movieImdbIDs={movieImdbIDs} />
    </>
  )
}

export default Movies;