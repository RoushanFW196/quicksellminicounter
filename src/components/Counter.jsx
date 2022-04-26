
import React, {useState} from 'react';
import "./counter.css";
const Counter = () => {
  const [count,setCount]=useState(1)




  return (
    <div className="container">
       <div className="counter-wrapper">
         <div className="rectanglecopy">
             <button className="logo" onClick={()=>setCount(count-1)}>-</button>
         </div>
         <div>
             <p className="text">{count}</p>
         </div>
         <div>
             <button className="logo2 rectanglecopy2" onClick={()=>setCount(count+1)}>+</button>
         </div>
       </div>
    </div>
  )
}

export default Counter;