import React from "react";
import "./TablePage.css";
import dayjs from "dayjs";
function TablePage(props) {
  console.log(props.data);
  return (
    <div>
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
          </tr>

          {props.data.map((e, index) => (
            <tr key={index}>
              <td>
                {e.fname} {e.lname}
              </td>
              <td>{dayjs(e.date).format("MM/DD/YYYY")}</td>
              <td>{e.aboutText}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePage;
