import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  technicalOrder,
  Description,
  times,
  tail,
  UOM,
  PN,
  SN,
  price
) {
  return { technicalOrder, Description, times, tail, UOM, PN, SN, price };
}

const rows = [
  createData(
    "Ad150",
    "Cooler Filter",
    2,
    "1458",
    "Flight Hours",
    "PT6A-AS5",
    "PCE-154",
    "500.00"
  ),
  createData(
    "Ad151",
    "Turbine Overhaul",
    5,
    "1459",
    "Flight Hours",
    "PT6A-AS6",
    "PCE-50",
    "900.00"
  ),
  createData(
    "Ad151",
    "Oil Filter",
    5,
    "1461",
    "Flight Hours",
    "PT6A-AS6",
    "PCE-53",
    "300.00"
  ),
  createData(
    "Ad151",
    "Compressor Overhaul",
    5,
    "1468",
    "Flight Hours",
    "PT6A-AS6",
    "PCE-158",
    "200.00"
  ),
];

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Technical order</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">
              Technical order times
            </StyledTableCell>
            <StyledTableCell align="center">Tail</StyledTableCell>
            <StyledTableCell align="center">UOM</StyledTableCell>
            <StyledTableCell align="center">Part No.</StyledTableCell>
            <StyledTableCell align="center">Serial No.</StyledTableCell>
            {props.type == "maintenance" ? (
              ""
            ) : (
              <StyledTableCell align="center">Item price.</StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.technicalOrder}>
              <StyledTableCell component="th" scope="row">
                {row.technicalOrder}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.Description}
              </StyledTableCell>
              <StyledTableCell align="center">{row.times}</StyledTableCell>
              <StyledTableCell align="center">{row.tail}</StyledTableCell>
              <StyledTableCell align="center">{row.UOM}</StyledTableCell>
              <StyledTableCell align="center">{row.PN}</StyledTableCell>
              <StyledTableCell align="center">{row.SN}</StyledTableCell>
              {props.type == "maintenance" ? (
                ""
              ) : (
                <StyledTableCell align="center">{row.price}</StyledTableCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
