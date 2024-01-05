import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Check({handleClick,gender}) {
  return (
    <Box sx={{ minWidth: 120 ,mt:2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          value={gender}
          onChange={handleClick}
        >
          <MenuItem  value="Male">Male</MenuItem>
          <MenuItem  value="Female">Female</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default Check
