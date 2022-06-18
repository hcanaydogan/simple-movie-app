import React from 'react';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './skeletons/MovieCardSkeleton';
import Box from '@mui/material/Box';

function MoviesGrid({ movies, loading }) {
  const renderedListItems = movies.map((movie, i) => {
    return (
      <MovieCard key={i} {...movie} />
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
      {!loading && movies.length ? renderedListItems : [...Array(10)].map((v, i) => (<MovieCardSkeleton key={i} />))}
    </Box>
  );
};

export default MoviesGrid;
