import React from "react";
import "./TablePage.css";
import dayjs from "dayjs";
import { Box } from "@mui/material";
function TablePage(props) {
  return (
    <Box>
      <table id="student">
        <tbody>
          <tr>
            <th>
              <label for="first">Name</label>
            </th>
            <th>
              <label for="dob">DOB</label>
            </th>
            <th>
              <label for="about">About</label>
            </th>
            <th>
              <label for="about">Gender</label>
            </th>
          </tr>

          {props.data.map((e, index) => (
            <tr key={index}>
              <td>
                {e.fname} {e.lname}
              </td>
              <td>{dayjs(e.date).format("MM/DD/YYYY")}</td>
              <td>{e.aboutText}</td>
              <td>{e.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
    
  );
}

export default TablePage;
