import React from 'react';
import { useParams } from "react-router-dom";

function MovieDetails(){
  let params = useParams();
  return (
    <div>movieDetails - {params.imdbId}</div>
  )
}

export default MovieDetails;