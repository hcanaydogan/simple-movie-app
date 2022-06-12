import { combineReducers } from 'redux';
import moviesReducer from './features/movies/moviesSlice';
import filtersReducer from './features/filters/filtersSlice';

const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer
});

export default rootReducer;