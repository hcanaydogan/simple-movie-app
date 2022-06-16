import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function MovieDetailsDescription({Title, Poster, Plot}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <img width="230" src={Poster} alt={Title} />
      <Box sx={{ margin: '1rem' }}>
        <Box>

        </Box>
        <Typography variant="h5">Plot</Typography>
        <Typography variant="subtitle2">{Plot}</Typography>
      </Box>
    </Box>

  )
}

export default MovieDetailsDescription;