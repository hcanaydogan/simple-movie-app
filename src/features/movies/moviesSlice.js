import { uniqBy } from "lodash";

const API_URL = "http://www.omdbapi.com/?apikey=fd5fe260";
const intialState = [];

export const moviesFetched = movies => ({ type: 'movies/moviesFetched', payload: movies });

export default function moviesReducer(state = intialState, action) {
  switch (action.type) {
    case 'movies/moviesFetched':
      return action.payload;
    default:
      return state;
  }
}

export const fetchMovies = () => async (dispatch, getState) => {
  const { text: s = '', year: y = '', type = '' } = getState().filters;
  const queryParams = new URLSearchParams({ s, y, type }).toString();

  try {
    console.log('state before', getState());
    const response = await fetch(`${API_URL}&${queryParams}`);
    const { Search: movies } = await response.json();
    const uniqueMovies = uniqBy(movies, 'imdbID');
    dispatch(moviesFetched(uniqueMovies));
    console.log('state after', getState());
  } catch (e) {
    console.log('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
  }
}
