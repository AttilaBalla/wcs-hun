import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Typography from "@mui/material/Typography";
import {categoryHeader} from "@/utils/typography";
import * as React from "react";

export function PriceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={categoryHeader}>
                Árak
              </Typography>
            </TableCell>
            <TableCell align='right'>Elővételben</TableCell>
            <TableCell align='right'>Helyszínen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              Részvételi hozzájárulás
            </TableCell>
            <TableCell align='right'>
              <Typography sx={categoryHeader}>
                4500 Ft
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <b>5000 Ft</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Verseny nevezés *
            </TableCell>
            <TableCell align='right'>
              -
            </TableCell>
            <TableCell align='right'>
              <b>2000 Ft</b>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}