import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function Movie() {
  const params = useParams();
  const [fetchingStatus, setFetchingStatus] = useState('loading');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    
  });
  return (
    <div>{params.imdbID}</div>
  );
}

export default Movie;