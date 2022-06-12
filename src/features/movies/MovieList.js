import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MovieListItem from './MovieListItem';

const selectMovieImdbIDs = state => state.movies.map(movie => movie.imdbID);

const MovieList = () => {
  const movieImdbIDs = useSelector(selectMovieImdbIDs, shallowEqual);
  const renderedListItems = movieImdbIDs.map(movieImdbID => {
    console.log(movieImdbID)
    return <MovieListItem key={movieImdbID} id={movieImdbID} />
  });

  return <ul className="movie-list">{renderedListItems}</ul>
};

export default MovieList;
