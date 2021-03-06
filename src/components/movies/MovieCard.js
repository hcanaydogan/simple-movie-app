import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

function MovieCard({Year, Title, Type, imdbID, Poster}) {
  let navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 250, width: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={Poster}
        alt={Title}
      />
      <CardContent>
        <Link color="secondary" href={`/${imdbID}`}>
          {Title}
        </Link>
        <Typography variant="subtitle2" color="text.secondary">
          {Year}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {Type}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={`ImdbID: ${imdbID}`}> 
          <Button variant="contained" onClick={() => navigate(imdbID)}>IMDB</Button>
        </Tooltip>
      </CardActions>
    </Card>
  )
};

export default MovieCard;