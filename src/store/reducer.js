import { combineReducers } from 'redux';
import moviesReducer from './movies/movies.reducer';
import filtersReducer from './filters/filters.reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer
});

export default rootReducer;