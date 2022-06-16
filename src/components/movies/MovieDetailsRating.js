import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';

function MovieDetailsRating({ source, rating}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
      <Typography variant="overline">{source.toUpperCase()}</Typography>
      <Box sx={{ display: 'flex' }}>
        {source.includes('Tomato') ?
          (<img src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-fresh.149b5e8adc3.svg" style={{ width: 20, height: 20 }} />)
          :
          (
            <SvgIcon>
              <path fill="#f5c518" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </SvgIcon>
          )
        }
        <Typography variant="subtitle2" sx={{alignSelf: 'flex-end'}}>{rating}</Typography>
      </Box>
    </Box>
  )
}

export default MovieDetailsRating;