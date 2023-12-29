import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)
  function add_Click(e){
   setCount(count+1);
  }
  function dec_Click(e){
   if(count>0){
     setCount(count-1);
   }
  }
  return (
    <>
    <h1>Counter {count}</h1>
      <button className="add" onClick={add_Click} value="count">Increment</button>
      <button className="dec" disabled={count==0} onClick={dec_Click}  value="count">Decrement</button>
    </>
  )
}
