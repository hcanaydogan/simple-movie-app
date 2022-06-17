import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';

function MovieDetailsDescriptionSkeleton() {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'start' }, marginTop: { xs: '0.5rem', sm: '0' } }}>
      <Skeleton variant="rectangular" sx={{ width: '240px', height: '350px' }} />
      <Box sx={{ margin: '1rem', flex: 1 }}>
        <Box sx={{ marginBottom: '1rem', display: 'flex' }}>
          {[...Array(3)].map((v, i) => (<Skeleton key={i} variant="rectangular" sx={{ width: '4rem', height: '2rem', borderRadius: '16px', margin: '0.5rem' }} />))}
        </Box>
        <Skeleton variant="h5" width="45px" />
        {[...Array(4)].map((v, i) => (<Skeleton key={i} animation="wave" />))}
        <List dense={true}>
          {[...Array(3)].map((v, i) => (
            <ListItem key={i} sx={{ paddingLeft: 0 }}>
              <ListItemText primary={<Skeleton width="55px" />} secondary={<Skeleton width={i === 0 ? "100px" : "150px"} />} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default MovieDetailsDescriptionSkeleton;