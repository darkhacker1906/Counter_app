import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function SnackBars({test}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    console.log(test, "testttttttttttt");
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
 
  return (
    <>
    {
      test && 
      <Snackbar open={test} autoHideDuration={1000}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
             This is a success message!
           </Alert>
        </Snackbar>
    }
    </>
  );
}
export default SnackBars