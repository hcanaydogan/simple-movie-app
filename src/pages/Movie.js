import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieDetails } from '../services/Omdb/api';
import { getParamsForMovieDetailsApi } from '../services/Omdb/utils';
import MovieDetailsDescription from '../components/movies/MovieDetailsDescription';
import MovieDetailsHeader from '../components/movies/MovieDetailsHeader';
import MovieDetailsHeaderSkeleton from '../components/movies/skeletons/MovieDetailsHeaderSkeleton';
import MovieDetailsDescriptionSkeleton from '../components/movies/skeletons/MovieDetailsDescriptionSkeleton';

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

  const { Title, Year, Runtime, Rated, Ratings = [], Poster, Plot, Genre, Director, Writer, Actors } = movie;

  return (
    <>
      {Object.keys(movie).length ?
        (
          <>
            <MovieDetailsHeader {...{ ...{ Title, Year, Rated, Runtime, Ratings } }} />
            <MovieDetailsDescription {...{ ...{ Title, Poster, Plot, Genre, Director, Writer, Actors } }} />
          </>
        )
        :
        (
          <>
            <MovieDetailsHeaderSkeleton />
            <MovieDetailsDescriptionSkeleton />
          </>
        )
      }
    </>
  );
}

export default Movie;