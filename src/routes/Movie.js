import { useParams } from "react-router-dom";

function Movie(){
  let params = useParams();
  return (
    <div>movie - {params.imdbId}</div>
  )
}

export default Movie;