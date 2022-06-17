export const API_URL = "http://www.omdbapi.com/" //?apikey=fd5fe260";
export const API_KEY = "fd5fe260";

export function getParamsForMoviesApi(searchParams){
  const { text: s = '', type: type = '', page: page = '', year: y = '' } = searchParams;
  return {s, type, page, y};
}

export function getParamsForMovieDetailsApi(imdbID){
  return {i: imdbID};
}
