import React, { useState } from "react";
import {Box,TextField,Button,Stack,Typography,Backdrop,CircularProgress, InputLabel,} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Grid from "@mui/material/Grid";
import TablePage from "./TablePage";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import SelectGender from "../components/SelectGender";
import SnackBars from "../components/SnackBars";

function FormPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [date, setDate] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const [test , setTest] = useState(false)
  const [message, setMessage] = useState("")
  const [rest, setRest]= useState("")
  const [arr,SetArr]=useState([]);
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
  
  function addList(fname,lname,aboutText,date,gender){
        var dataArr={fname,lname,aboutText,date,gender};
        SetArr([...arr, dataArr]);
       }

  const submit_click = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (isFormValid()) {
      addList(fname, lname, aboutText, date, gender);
      setMessage("Data added successfully")
      setRest("success");
      setFname("");
      setLname("");
      setDate("");
      setAboutText("");
      setGender("");
      setTest(true)
    }else{
      setTest(true)
      setMessage("all data required")
      setRest("error")
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
      <Grid container spacing={2} my={4}sx={{p:'2'}}>
        <Grid item xs={6} >
          <Box bgcolor="#f0f8ff"p={2}>
            <Stack direction={"row"} spacing={2} sx={{ mb: 2 }}>
              <Box sx={{ width: '50%' }}>
                <Typography variant="h6" sx={{ color:"#000000"}}>Enter First Name</Typography>
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
                  <Typography variant="h6"sx={{ color:"#000000"}}>Enter Last Name</Typography>
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
                    <Typography variant="h6" sx={{color:"#000000"}}>Enter Date Of Birth</Typography>
                  <DatePicker
                    sx={{ "&.MuiFormControl-root": { marginTop: "0" },"&.MuiInputBase-input":{color:"#606366"} }}
                    slotProps={{ textField: { variant: "filled" } }}
                    value={date}
                    onChange={(e) => handleChange(e)}
                    id="date_pick"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
              <Typography variant="h6"  sx={{color:"#000000",marginTop: "20px" }}>Enter Comments</Typography>
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
            <SelectGender handleClick={check_change} gender={gender} />
              <Button
                onClick={submit_click}
                sx={{ mt: 2, width: "100%" }}
                variant="contained"  >
                Submit
              </Button>
            
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="#f0f8ff">
            {loading? <CircularProgress /> :<TablePage  data={arr} />}
          </Box>
        </Grid>
     <SnackBars test={test} setTest={setTest} message={message} rest={rest}/>
      </Grid>
    </Box>
  );
}

export default FormPage;
