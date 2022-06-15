import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../store/movies/movies.actions'
import MoviesGrid from "../components/movies/MoviesGrid";
import SearchTool from '../components/search/SearchTool';

function Movies() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('useEffect Main');
    dispatch(fetchMovies());
  });
  
  return (
    <>
      <SearchTool />
      <MoviesGrid />
    </>
  )
}

export default Movies;