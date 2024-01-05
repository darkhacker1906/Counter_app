import React, { useState } from "react";
import {Box,TextField,Button,Stack,Typography,Backdrop,CircularProgress,} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import TablePage from "./TablePage";
import { addList, arr } from "./Functions";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Check from "../components/Check";
import SnackBars from "../components/SnackBars";


function FormPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [students, setStudents] = useState([]);
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [test , setTest] = useState(false)
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

  const submit_click = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  

    if (isFormValid()) {
      addList(fname, lname, aboutText, date, gender);
      setStudents([...arr]);
      setFname("");
      setLname("");
      setDate("");
      setAboutText("");
      setGender("");
      setTest(true)
    }
  };
  const handleChange = (e) => {
    setDate(e.$d);
  };
  const check_change = (event) => {
    setGender(event.target.value);
  };
  return (
    <Box>
      <Grid container spacing={2} my={4}>
        <Grid item xs={6}>
          <Box bgcolor="aliceblue">
            <Stack direction={"row"} spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ width: '50%' }}>
                <label htmlFor itemID="first">
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
                  sx={{ width: "100%" }}
                />
              </Box>
              <Box sx={{ width: "48%" }}>
                <label htmlFor itemID="last" style={"display:inline-block"}>
                  <Typography variant="h6">Enter Last Name</Typography>
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
                  sx={{ width: "100%" }}
                />
              </Box>
            </Stack>
            <Box sx={{ mb: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={["DatePicker", "DatePicker", "DatePicker"]}
                >
                  <label for id="date_pick">
                    <Typography variant="h6">Enter Date Of Birth</Typography>
                  </label>
                  <DatePicker
                    sx={{ "&.MuiFormControl-root": { marginTop: "0" } }}
                    slotProps={{ textField: { variant: "filled" } }}
                    value={date}
                    onChange={(e) => handleChange(e)}
                    id="date_pick"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>

            <label
              id="outlined-multiline-flexible"
              style={{ marginTop: "20px" }}
            >
              <Typography variant="h6">Enter Comments</Typography>
            </label>
            <TextField
              id="outlined-multiline-flexible"
              value={aboutText}
              label="Write about yourself"
              onChange={(e) => {
                setAboutText(e.target.value);
              }}
              multiline
              minRows={4}
              size="medium"
              sx={{
                "& > :not(style)": { width: "100%" },
                display: "block",
                width: "100%",
              }}
            />
            <Check handleClick={check_change} gender={gender} />
            {loading ? (
              <CircularProgress />
            ) : (
              <Button
                onClick={submit_click}
                sx={{ mt: 2, width: "100%" }}
                variant="contained"  >
                Submit
              </Button>
            )}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="aliceblue">
            <TablePage data={students} />
          </Box>
        </Grid>
     <SnackBars test={test} />
      </Grid>
    </Box>
  );
}

export default FormPage;
