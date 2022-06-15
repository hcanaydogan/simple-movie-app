import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import MovieGridItem from './MovieGridItem';
import Box from '@mui/material/Box';

const selectMovieImdbIDs = state => state.movies.map(movie => movie.imdbID);

const MovieList = () => {
  const movieImdbIDs = useSelector(selectMovieImdbIDs, shallowEqual);
  const renderedListItems = movieImdbIDs.map((movieImdbID, i) => {
    return (
      <MovieGridItem key={i} id={movieImdbID} />
    );
  });

  return (
    <Box sx={{
      display: 'grid', 
      gap: 1,
      gridTemplateColumns: {
        lg: 'repeat(5, 1fr)',
        md: 'repeat(4, 1fr)',
        sm: 'repeat(3, 1fr)',
        xs: 'repeat(2, 1fr)'
      },
      justifyItems: 'center'
    }}>
      {renderedListItems}
    </Box>
  )
  return <ul className="movie-list">{renderedListItems}</ul>
};

export default MovieList;
