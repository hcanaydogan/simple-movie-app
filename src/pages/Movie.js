import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieDetails } from '../services/Omdb/api';
import { getParamsForMovieDetailsApi } from '../services/Omdb/utils';
import MovieDetailsDescription from '../components/movies/MovieDetailsDescription';
import MovieDetailsHeader from '../components/movies/MovieDetailsHeader';
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

  const { Title, Year, Runtime, Rated, Ratings = [], Poster, Plot } = movie;

  return (
    <>
      <MovieDetailsHeader {...{...{Title, Year, Rated, Runtime, Ratings}}} />
      <MovieDetailsDescription {...{...{Title, Poster, Plot}}} />
    </>
  );
}

export default Movie;

//title={Title} year={Year} runtime={Runtime} rated={Rated} ratings={Ratings}