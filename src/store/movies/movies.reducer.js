const intialState = {
  status: 'idle',
  entities: [],
  totalResults: 0,
  errorMessage: null
};

export default function moviesReducer(state = intialState, action) {
  switch (action.type) {
    case 'movies/moviesFetchedSuccess':
      return {
        ...state,
        status: 'success',
        entities: action.payload.movies,
        totalResults: action.payload.totalResults
      }
    case 'movies/moviesFetchedError':
      return {
        ...state,
        status: 'error',
        errorMessage: action.payload
      }
    case 'movies/moviesFetching':
      return {
        ...state,
        status: 'loading'
      }
    default:
      return state;
  }
}
