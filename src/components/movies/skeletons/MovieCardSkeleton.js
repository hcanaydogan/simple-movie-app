import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function MovieDetailsHeaderSkeleton() {
  
  return (
    <Card sx={{ maxWidth: 250, width: '100%' }}>
     <Skeleton variant="rectangular" height={140} />
      <CardContent>
        <Skeleton />
        <Skeleton width="50%" />
      </CardContent>
      <CardActions>
        <Skeleton variant="rectangular" sx={{width:"70px", height: "40px", borderRadius: "4px"}}/>
      </CardActions>
    </Card>
  )
}

export default MovieDetailsHeaderSkeleton;