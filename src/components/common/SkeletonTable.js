import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

function SkeletonTable({ rowCount = 5, cellCount = 5 }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {
              [...Array(rowCount)].map((v, i) => (
                <TableCell key={i}>
                  <Skeleton sx={i === 0 ? { marginRight: 'auto', width: '70%' } : { marginLeft: 'auto', width: '40%' }} />
                </TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {
            [...Array(rowCount)].map((v, i) => (
              <TableRow key={i}>
                {
                  [...Array(cellCount)].map((v, i) => (
                    <TableCell key={i}>
                      <Skeleton sx={i === 0 ? { marginRight: 'auto', width: '50%' } : { marginLeft: 'auto', width: '20%' }} />
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default SkeletonTable;
