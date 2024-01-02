import React,{useState} from 'react'
import ButtonBase from '../components/ButtonBase';
import Box from '@mui/system/Box';

function Homepage() {
    const [count,setCount]=useState(0);
    function add_click(){
        setCount(count+1);
    }
    function decrease_click(){
        if(count>0){
            setCount(count-1);
        }
    }
  return (
    <Box>
      <h1>Counter {count}</h1>
      <Box style="display:flex;">
      <ButtonBase title="increment" handleClick={add_click} />
      <ButtonBase  title="decrement" handleClick={decrease_click} count={count}  />
      </Box>
    </Box>
  )
}

export default Homepage