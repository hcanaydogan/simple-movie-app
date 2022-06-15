import React from 'react';
import { useParams } from "react-router-dom";

function Movie(){
  let params = useParams();
  return <div>imdbId {params.imdbId}</div>
}

export default Movie;