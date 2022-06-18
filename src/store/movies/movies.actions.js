import { getMovies } from '../../services/Omdb/api';
import { getParamsForMoviesApi } from '../../services/Omdb/utils';

export const moviesFetchedSuccess = movies => ({ type: 'movies/moviesFetchedSuccess', payload: movies });
export const moviesFetchedError = error => ({ type: 'movies/moviesFetchedError', payload: error });

export const fetchMoviesByFilters = () => async (dispatch, getState) => {
  try {
    const queryParams = getParamsForMoviesApi(getState().filters.searchParams);
    const {movies, totalResults} = await getMovies(queryParams);
    dispatch(moviesFetchedSuccess({movies, totalResults}));
  } catch (e) {
    dispatch(moviesFetchedError(e.toString()));
  }
}

