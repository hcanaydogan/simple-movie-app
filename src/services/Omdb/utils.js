export const API_URL = "http://www.omdbapi.com/?apikey=fd5fe260";

export function getQueryForMoviesApi(searchParams){
  const { Text: s = '', Type: type = '', Page: page = '', Year: y = '' } = searchParams;
  return new URLSearchParams({s, type, page, y}).toString();
}