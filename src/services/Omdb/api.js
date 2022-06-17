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
    return {movies: mockMovies()}; // @TODO remove before commit
    const { Search: movies, totalResults } = await OmdbGetJson(queryParams);
    return { movies, totalResults };
  } catch (e) {
    console.error('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
    throw new Error(e);
  }
}

export async function getMovieDetails(queryParams) {
  try {
    return mockDetails(); // @TODO remove before commit
    return await OmdbGetJson(queryParams);
  } catch (e) {
    console.error('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
    throw new Error(e);
  }
}


const mockDetails = () => {// @TODO remove before commit
  return {"Title":"Pokémon: The First Movie - Mewtwo Strikes Back","Year":"1998","Rated":"G","Released":"10 Nov 1999","Runtime":"96 min","Genre":"Animation, Action, Adventure","Director":"Kunihiko Yuyama, Michael Haigney","Writer":"Satoshi Tajiri, Takeshi Shudo, Norman J. Grossfeld","Actors":"Veronica Taylor, Rachael Lillis, Eric Stuart","Plot":"Scientists genetically create a new Pokémon, Mewtwo, but the results are horrific and disastrous.","Language":"Japanese","Country":"Japan","Awards":"3 wins & 6 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMWYyNTBkNzAtZDg1YS00ZDhhLTg4MjAtOTg2NDY4ZjA2NzcyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.2/10"},{"Source":"Rotten Tomatoes","Value":"16%"},{"Source":"Metacritic","Value":"35/100"}],"Metascore":"35","imdbRating":"6.2","imdbVotes":"42,775","imdbID":"tt0190641","Type":"movie","DVD":"21 Mar 2000","BoxOffice":"$85,744,662","Production":"N/A","Website":"N/A","Response":"True"}
}

const mockMovies = () => {// @TODO remove before commit
  return [
    {
      "Title": "Pokémon Detective Pikachu",
      "Year": "2019",
      "imdbID": "tt5884052",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDkxNzRmNDYtMDY0OS00N2JhLTkzZWUtMWE3MzZkNDk1MmJiXkEyXkFqcGdeQXVyNTA3MTU2MjE@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon: The First Movie - Mewtwo Strikes Back",
      "Year": "1998",
      "imdbID": "tt0190641",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMWYyNTBkNzAtZDg1YS00ZDhhLTg4MjAtOTg2NDY4ZjA2NzcyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon",
      "Year": "1997–",
      "imdbID": "tt0168366",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon",
      "Year": "1997–",
      "imdbID": "tt0168366",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon",
      "Year": "1997–",
      "imdbID": "tt0168366",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon",
      "Year": "1997–",
      "imdbID": "tt0168366",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon",
      "Year": "1997–",
      "imdbID": "tt0168366",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNjU1YjM2YzAtZWE2Ny00ZWNiLWFkZWItMDJhMzJiNDQwMmI4XkEyXkFqcGdeQXVyNTU1MjgyMjk@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon the Movie 2000",
      "Year": "1999",
      "imdbID": "tt0210234",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzE1NjBiODAtNDVhNS00ZTI1LTg4ZjUtZTk3OWVhODljMjNjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon 3 the Movie: Spell of the Unown",
      "Year": "2000",
      "imdbID": "tt0235679",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0NzM3MDY1OV5BMl5BanBnXkFtZTYwNTkwODc5._V1_SX300.jpg"
    },
    {
      "Title": "Pokémon 3 the Movie: Spell of the Unown",
      "Year": "2000",
      "imdbID": "tt0235679",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTkzNzg2M15BMl5BanBnXkFtZTgwNjM5MzI5OTE@._V1_SX300.jpg"
    }
  ]
}