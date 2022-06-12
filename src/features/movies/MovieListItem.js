import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const selectMovieByImdbID = (state, imdbID) => {
  return state.movies.find(movie => movie.imdbID === imdbID);
};

const MovieListItem = ({ id }) => {
  console.log('MovieListItem render' , id);
  const movie = useSelector(state => selectMovieByImdbID(state, id));
  const { Title, Type, imdbID, Poster } = movie;

  return <li className="movie-list-item">
    <img src={Poster} />
    <div>{Title + ' - ' + Type }</div>
  </li>
};

export default MovieListItem;