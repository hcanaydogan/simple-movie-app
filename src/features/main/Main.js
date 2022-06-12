import { useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Movies from "../../routes/Movies";
import Movie from "../../routes/Movie";
import { fetchMovies } from '../movies/moviesSlice';

function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect Main');
    dispatch(fetchMovies());
  });

  return (
    <main>
      <Routes>
        <Route index element={<Movies />} />
        <Route path=":imdbId" element={<Movie />} />
      </Routes>
    </main>
  );
}

export default Main;