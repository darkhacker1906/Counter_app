import React from "react";
import Button from '@mui/material/Button';

function ButtonBase({ title, handleClick, count }) {
  return (
    <div>
      <Button className="clickButton" variant="contained" sx={{m:"10px",outline:"none"}} disabled={count === 0} onClick={handleClick}>
        {title}
      </Button>
    </div>
  );
}
export default ButtonBase;
