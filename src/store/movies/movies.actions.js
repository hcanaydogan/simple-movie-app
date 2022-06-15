export const moviesFetched = movies => ({ type: 'movies/moviesFetched', payload: movies });

export const fetchMovies = (searchParams) => async (dispatch, getState) => {
  const queryParams = new URLSearchParams(searchParams).toString();
/* @TODO remove before commit +++ */
  dispatch(moviesFetched(mockMovies()));
  return;
/* @TODO remove before commit --- */
  try {
    console.log('state before', getState());
    const response = await fetch(`${API_URL}&${queryParams}`);
    const { Search: movies } = await response.json();
    const uniqueMovies = uniqBy(movies, 'imdbID');
    dispatch(moviesFetched(uniqueMovies));
    console.log('state after', getState());
  } catch (e) {
    console.log('%cError while fetching movies: ', 'font-size: 18px; background: black; color: orange;', '\n', e);
  }
}

const mockMovies = () => {
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