import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const selectMovieByImdbID = (state, imdbID) => {
  return state.movies.find(movie => movie.imdbID === imdbID);
};

const MovieListItem = ({ id }) => {
  console.log('MovieListItem render', id);
  let navigate = useNavigate();
  const movie = useSelector(state => selectMovieByImdbID(state, id));
  const {Year, Title, Type, imdbID, Poster } = movie;

  return (
    <Card sx={{ maxWidth: 250, width: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={Poster}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom noWrap variant="subtitle1" title={Title}>
          {Title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {Year}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {Type}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={`ImdbID: ${imdbID}`}> 
          <Button className='imdb-btn' variant="contained" onClick={() => navigate(id)}>IMDB</Button>
        </Tooltip>
      </CardActions>
    </Card>
  )
};

export default MovieListItem;