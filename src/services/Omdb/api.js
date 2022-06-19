import { API_URL, API_KEY } from './utils';

async function OmdbGetJson(queryParams) {
  const request = new Request(`${API_URL}?${new URLSearchParams({apikey: API_KEY, ...queryParams})}`);
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error('HTTP error with status:' + response.status)
  };

  const jsonResponse = await response.json();
  const { Response, Error: errorMessage } = jsonResponse;

  if (Response === 'False') {
    throw new Error(errorMessage);
  }

  return jsonResponse;
}

export async function getMovies(queryParams) {
  try {
    const { Search: movies, totalResults } = await OmdbGetJson(queryParams);
    return { movies, totalResults };
  } catch (e) {
    console.error('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
    throw new Error(e.message);
  }
}

export async function getMovieDetails(queryParams) {
  try {
    return await OmdbGetJson(queryParams);
  } catch (e) {
    console.error('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
    throw new Error(e.message);
  }
}