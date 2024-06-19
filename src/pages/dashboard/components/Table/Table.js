import React, { useState, useEffect } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  // var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  // keys.shift(); // delete "id" key

 


  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
        <TableCell className="pl-3 fw-normal">S/N</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell style={{textAlign: 'center'}}>Phone Number</TableCell>
            <TableCell style={{textAlign: 'center'}} >No of Questions Asked</TableCell>
            <TableCell style={{textAlign: 'center'}}>Last Question Asked Date</TableCell>
          <TableCell style={{textAlign: 'center'}}>Last Question Message</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((d,i) => (
          <TableRow key={d.user_id}>
            <TableCell className="pl-3 fw-normal">{i+1}</TableCell>
            <TableCell >{d.full_name}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{d.phone_number}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{d.questions_asked}</TableCell>
            <TableCell style={{textAlign: 'center'}}>{d.latest_question_asked?.created_date || "-"}</TableCell>
          <TableCell style={{textAlign: 'center'}}>{d.latest_question_asked?.message || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
