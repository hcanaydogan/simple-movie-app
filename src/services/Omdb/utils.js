export const API_URL = "http://www.omdbapi.com/" //?apikey=fd5fe260";
export const API_KEY = "fd5fe260";

export function getParamsForMoviesApi(searchParams){
  const { Text: s = '', Type: type = '', Page: page = '', Year: y = '' } = searchParams;
  return {s, type, page, y};
}

export function getParamsForMovieDetailsApi(imdbID){
  return {i: imdbID};
}
