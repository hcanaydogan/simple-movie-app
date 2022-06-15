import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MovieListItem from './MovieListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const selectMovieImdbIDs = state => state.movies.map(movie => movie.imdbID);

const MovieList = () => {
  const movieImdbIDs = useSelector(selectMovieImdbIDs, shallowEqual);
  const renderedListItems = movieImdbIDs.map(movieImdbID => {
    console.log(movieImdbID)
    return (
      <Grid key={movieImdbID} item xs={6} sm={4} md={3} lg={2}>
        <MovieListItem id={movieImdbID} />
      </Grid>
    );
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 1}}>
        {renderedListItems}
      </Grid>
    </Box>
  )
  return <ul className="movie-list">{renderedListItems}</ul>
};

export default MovieList;
