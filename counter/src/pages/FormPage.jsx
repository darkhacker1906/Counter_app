import React, { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Grid from "@mui/material/Grid";
import TablePage from "./TablePage";
import { addList, arr } from "./Functions";

function FormPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [students, setStudents] = useState([]);

  // const submit_click=()=>{
  //  if( fname.trim() !== "" && lname.trim() !== "" && aboutText.trim() !== "" && date.toLocaleDateString(undefined, options)!=true)
  //  {
  //   addList(fname,lname,aboutText,date);
  //   setStudents([...arr]);
  //   setFname("");
  //   setLname("");
  //   setDate("");
  //   setAboutText("");
  //  }
  //    else{
  //     alert("You are going wrong");
  //    }
  // }

  const isFormValid = () => {
    if (
      fname.trim() === "" ||
      lname.trim() === "" ||
      aboutText.trim() === "" ||
      date === ""
    ) {
      return false;
    }
    return true;
  };

  const submit_click = (e) => {
    if (isFormValid()) {
      addList(fname, lname, aboutText, date);
      setStudents([...arr]);
      setFname("");
      setLname("");
      setDate("");
      setAboutText("");
    }
  };
  const handleChange = (e) => {
    setDate(e.$d);
  };
  return (
    <Box>
      <Grid container spacing={2} my={4}>
        <Grid item xs={6}>
          <Box bgcolor="aliceblue">
            <Stack direction={"row"} spacing={2}sx={{mb:2}}>
              <Box sx={{width:'50%'}}>
                <label  htmlFor itemID="first">
                  Enter first name
                </label>
                <br />
                <TextField
                  id="filled-basic"
                  itemID="first"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  label="First Name"
                  variant="filled"
                  sx={{width:"100%"}}
                />
              </Box>
              <Box sx={{width:'50%'}}>
                <label htmlFor itemID="last">
                  Enter first name
                </label>
                <br />
                <TextField
                  id="filled-basic"
                  itemID="last"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  label="Last Name"
                  variant="filled"
                  sx={{width:"100%"}}
                />
              </Box>
            </Stack>
            <Box sx={{width:"100%"}}>
            <LocalizationProvider 
              dateAdapter={AdapterDayjs}
              sx={{ mt: 2 }}
              value={aboutText}
            >
               <label for id="date_pick">Enter date of birth</label>
              <DatePicker
                value={date}
                onChange={(e) => handleChange(e)}
                id="date_pick"
                sx={{ display: "block", mb: 2, width: "100%" }}
              />
            </LocalizationProvider>
            </Box>
            
            <label id="outlined-multiline-flexible">Enter comments</label>
            <TextField
              id="outlined-multiline-flexible"
              value={aboutText}
              label="Write about yourself"
              onChange={(e) => {
                setAboutText(e.target.value);
              }}
              multiline
              minRows={4}
              sx={{ "&.MuiInputBase-Root": "100%", display: "block", mb: 2 }}
              dis
            />
            <Button onClick={submit_click} sx={{ mb: 2 }} variant="contained">
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="aliceblue">
            <TablePage data={students} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FormPage;
