import * as React from 'react';
import MovieDetailsRating from './MovieDetailsRating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MovieDetailsHeader({Title, Year, Rated, Runtime, Ratings}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row'}}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: {xs: 'center', md: 'left'} }}>
          <Typography variant="h5">{Title}</Typography>
          <Typography>{Year} &#8226; {Rated} &#8226; {Runtime}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {Ratings.map(({ Source, Value }, i) => {
            return <MovieDetailsRating key={i} source={Source} rating={Value} />
          })}
        </Box>
      </Box>
  )
}

export default MovieDetailsHeader;