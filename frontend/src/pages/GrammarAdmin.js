import React from 'react'
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import useTitle from './../hooks/useTitle';

function createData(name, content) {
  return { name, content };
}
const rows = [
  createData('Thì hiện tại đơn', 'Không có'),
  createData('Thì tương lai đơn', 'Không có'),
];
export default function GrammarAdminPage() {
  useTitle('Quản lý ngữ pháp');
  return (
    <>
      <Container>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tên ngữ pháp</TableCell>
            <TableCell align="right">Nội dung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
    </>
  )
}

