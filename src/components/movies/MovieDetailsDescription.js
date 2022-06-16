import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function MovieDetailsDescription({ Title, Poster, Plot, Genre = '', Director = '', Writer = '', Actors = '' }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'start' }, marginTop: { xs: '0.5rem', sm: '0' } }}>
      <img width="230" src={Poster} alt={Title} style={{ height: '100%' }} />
      <Box sx={{ margin: '1rem' }}>
        <Box sx={{ marginBottom: '1rem' }}>
          <Stack direction="row" spacing={1}>
            {
              Genre.split(',').map((g, i) => {
                return <Chip key={i} label={g} color="secondary" variant="outlined" />
              })
            }
          </Stack>
        </Box>
        <Typography variant="h5">Plot</Typography>
        <Typography variant="subtitle2" sx={{ maxHeight: '350px', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 4, overflow: 'hidden' }}>{Plot}</Typography>
        <List dense={true}>
          {renderListItemText('Director', Director)}
          {renderListItemText('Writer', Writer)}
          {renderListItemText('Actor', Actors)}
        </List>
      </Box>
    </Box>
  );
}

function renderListItemText(name, list) {
  list = list.split(',')
  return (
    <ListItem>
      <ListItemText
        primary={`${name}${list.length > 1 ? 's' : ''}`}
        secondary={
            list.map((v, i) => {
              return <span key={i}>{v}{i != list.length - 1 && <>&nbsp;&#8226;</>}</span>;
            })
          } 
      />
    </ListItem>
  );
}

export default MovieDetailsDescription;