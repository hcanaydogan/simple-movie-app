import {
  Routes,
  Route,
} from "react-router-dom";
import Movies from "../../routes/Movies";
import Movie from "../../routes/Movie";

function Main() {
  return (
    <main>
      <Routes>
        <Route index element={<Movies />} />
        <Route path=":imdbId" element={<Movie />} />
      </Routes>
    </main>
  )
}

export default Main;