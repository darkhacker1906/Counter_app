import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {useEffect} from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

 function SnackBars({test,setTest,message,rest}) {
   
  const handleClose = (event, reason) => {
    // setTimeout(()=>{
    //   setTest(false);
    // },1000)
    setTest(false)
  };

// useEffect(() => {
//   if(test){
//     handleClose()
//   }
// }, [test]);
 
  return (
    <>
      <Snackbar open={test} autoHideDuration={2000}  onClose={handleClose}>
           <Alert onClose={handleClose} severity={rest} sx={{ width: '100%' }}>
            {message} 
           </Alert>
        </Snackbar>
    </>
  );
}
export default SnackBars