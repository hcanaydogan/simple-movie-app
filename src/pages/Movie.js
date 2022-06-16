import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieDetails } from '../services/Omdb/api';
import { getParamsForMovieDetailsApi } from '../services/Omdb/utils';
import MovieDetailsRating from '../components/movies/MovieDetailsRating';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Movie() {
  const params = useParams();
  const [fetchingStatus, setFetchingStatus] = useState('loading');
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const queryParams = getParamsForMovieDetailsApi(params.imdbId);
      const movieDetails = await getMovieDetails(queryParams);
      console.log('movieDetails', movieDetails)
      setMovie(movieDetails);
    })();
  }, []);

  function getRatingsHtml(ratings) {
    return ratings.map(({ Source, Value }, i) => {
       return <MovieDetailsRating key={i} source={Source} rating={Value}/>
    })
  }

  const { Title, Year, Runtime, Rated, Ratings = [] } = movie;
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'whitesmoke' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem' }}>
          <Typography variant="h5">{Title}</Typography>
          <Typography>{Year} &#8226; {Rated} &#8226; {Runtime}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {getRatingsHtml(Ratings)}
        </Box>
      </Box>
    </>
  );
}

export default Movie;
