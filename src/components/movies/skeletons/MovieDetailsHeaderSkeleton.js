import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function MovieDetailsHeaderSkeleton() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '45%', textAlign: { xs: 'center', md: 'left' } }}>
        <Skeleton />
        <Skeleton sx={{ width: '30%' }} />
      </Box>
      <Box sx={{ width: '45%', display: 'flex', justifyContent: 'end' }}>
        {[...Array(3)].map((v, i) => (<Skeleton key={i} variant="rectangular" sx={{ width: '20%', margin: '1rem', height: '3rem' }} />))}
      </Box>
    </Box>
  )
}

export default MovieDetailsHeaderSkeleton;