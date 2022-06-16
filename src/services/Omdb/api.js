import { API_URL } from './utils';

export async function getMovies(queryParams) {
  try {
    const response = await fetch(`${API_URL}&${queryParams}`);
    const { Response, Error: errorMessage, Search: movies, totalResults } = await response.json();
    
    if(Response === 'False') {
      console.log('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', errorMessage);
      throw new Error(errorMessage);
    }

    return {movies, totalResults};
  } catch (e) {
    console.log('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
    throw new Error(e);
  }
}

//Response: "True"
//Response: "False"