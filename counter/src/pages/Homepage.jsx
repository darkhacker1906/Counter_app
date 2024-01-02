import React,{useState} from 'react'
import Button from '../components/Button';

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
    <div>
      <h1>Counter {count}</h1>
      <div style="display:flex;">
      <Button title="increment" handleClick={add_click} />
      <Button  title="decrement" handleClick={decrease_click} count={count}  />
      </div>
    </div>
  )
}

export default Homepage