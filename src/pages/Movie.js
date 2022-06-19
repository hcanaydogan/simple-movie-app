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
  const [fetchingStatus, setFetchingStatus] = useState({ name: 'loading', message: ''});
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const queryParams = getParamsForMovieDetailsApi(params.imdbId);
      setFetchingStatus({name: 'loading'});
      try {
        const movieDetails = await getMovieDetails(queryParams);
        setMovie(movieDetails);
        document.title = movieDetails.Title;
        setFetchingStatus({name:'success'});
      } catch (e) {
        setFetchingStatus({name:'error', message: e.message});
      }
    })();
  }, []);

  return renderPage(fetchingStatus, movie);
}

function renderPage(status, movie) {
  switch (status.name) {
    case 'loading':
      return (
        <>
          <MovieDetailsHeaderSkeleton />
          <MovieDetailsDescriptionSkeleton />
        </>
      );
    case 'error':
      return (
        <p>{status.message}</p>
      );
    case 'success':
      const { Title, Year, Runtime, Rated, Ratings = [], Poster, Plot, Genre, Director, Writer, Actors } = movie;
      return (
        <>
          <MovieDetailsHeader {...{ ...{ Title, Year, Rated, Runtime, Ratings } }} />
          <MovieDetailsDescription {...{ ...{ Title, Poster, Plot, Genre, Director, Writer, Actors } }} />
        </>
      );
    default:
      return null;
  }
}

export default Movie;