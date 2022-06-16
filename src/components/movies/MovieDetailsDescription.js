import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function MovieDetailsDescription({ Title, Poster, Plot, Genre=''}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row'}, alignItems: {xs: 'center', sm: 'start'}, marginTop: {xs: '0.5rem', sm: '0'} }}>
      <img width="230" src={Poster} alt={Title} style={{height: '100%'}}/>
      <Box sx={{margin: '1rem'}}>
        <Box sx={{marginBottom: '1rem'}}>
          <Stack direction="row" spacing={1}>
            {
              Genre.split(',').map((g, i) => {
                return <Chip key={i} label={g} color="secondary" variant="outlined"/>
              })
            }
          </Stack>
        </Box>
        <Typography variant="h5">Plot</Typography>
        <Typography variant="subtitle2" sx={{maxHeight: '350px', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4, overflow: 'hidden'}}>{Plot}</Typography>
      </Box>
    </Box>
  );
}

export default MovieDetailsDescription;