import React from 'react';
import SkeletonTable from '../common/SkeletonTable';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function MoviesTable({ movies }) {
  const filteredMovies = movies.map(({Poster, ...rest}) => ({...rest}));
  const renderedHeadRow = movies => (
    <TableRow>
      {Object.keys(movies.at(0)).map((propName, i) => (<TableCell key={i} align={i === 0 ? 'left' : 'right'}>{propName}</TableCell>))}
    </TableRow>
  );

  const renderedBodyRows = movies => movies.map((movie, i) => {
    return (
      <TableRow key={i}>
        {Object.entries(movie).map(([propName, value], i) => {
          if (i === 0) {
            return (<TableCell key={i} align="left"><Link color="secondary" href={`/${movie.imdbID}`}>{value}</Link></TableCell>);
          }else {
            return (<TableCell key={i} align="right">{value}</TableCell>)
          }
        })}
      </TableRow>
    );
  });

  console.log(filteredMovies.length)
  return filteredMovies.length ? (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {renderedHeadRow(filteredMovies)}
        </TableHead>
        <TableBody>
          {renderedBodyRows(filteredMovies)}
        </TableBody>
      </Table>
    </TableContainer>
  )
    :
    (<SkeletonTable />);
}

export default MoviesTable;
