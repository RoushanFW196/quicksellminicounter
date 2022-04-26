
import React,{useState} from 'react'

const CounterInput = () => {
 const [data,setData]=useState(1);
 let maxvalue=1000;

  
 


  return (
    <div>
        <input type="number" default="1" onchange={(e)=>setData(e.target.value)}/>
    </div>
  )
}

export default CounterInput;