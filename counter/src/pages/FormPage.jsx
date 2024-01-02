import React,{useState} from 'react'
import { Box } from '@mui/material'
import {TextField} from '@mui/material'
import {DatePicker}from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';



function FormPage() {
    const[fname,setfname]=useState("");
  return (
    <Box>
    <Grid container spacing={2}>
  <Grid xs={8}>

    <Box sx={{display:'flex',flexDirection:'column',gap:'10px', justifyContent: 'space-evenly'}}>
    <TextField id="filled-basic"  value={fname} label="First Name" variant="filled" style={{border:"2px solid grey",width:"400px"}}/>
    <TextField id="filled-basic" label="Last Name" variant="filled" style={{border:"2px solid grey",width:"400px"}}/>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker style={{display: "block", margin:"10px"}}/>
    </LocalizationProvider>
    <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue="Small"
  variant="filled"
  size="small"/>
     <Button variant='contained'>Submit</Button>
  </Box>
  </Grid>

  <Grid xs={8}>

  </Grid>
</Grid>
    </Box>
   
  )
}

export default FormPage
