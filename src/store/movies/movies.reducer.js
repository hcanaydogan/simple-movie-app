//import { uniqByi, uniqueId } from "lodash";

const API_URL = "http://www.omdbapi.com/?apikey=fd5fe260";
const intialState = [];


export default function moviesReducer(state = intialState, action) {
  switch (action.type) {
    case 'movies/moviesFetched':
      return action.payload;
    default:
      return state;
  }
}
