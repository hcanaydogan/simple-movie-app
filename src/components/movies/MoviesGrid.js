import React from 'react';
import MovieCard from './MovieCard';
import Box from '@mui/material/Box';

const MoviesGrid = ({ movieImdbIDs }) => {
  const renderedListItems = movieImdbIDs.map((movieImdbID, i) => {
    return (
      <MovieCard key={i} id={movieImdbID} />
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
};

export default MoviesGrid;
