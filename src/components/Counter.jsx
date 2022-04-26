
import React, {useState} from 'react';
import "./counter.css";



const Counter = () => {
  const [count,setCount]=useState(1);

  

  





  return (
    <div className="container">
       <div className="counter-wrapper">

          <div className="rectanglecopy">
             <button className="logo1 " onClick={()=>setCount(count-1)}>-</button>
         </div>

         <div className="rectanglecopy3">
             <button  className="logo3">{count}</button>  
         </div>
          
      

         <div className="rectanglecopy2">
             <button className="logo2" onClick={()=>setCount(count+1)}>+</button>
         </div> 

        

       </div>
    </div>
  )
}

export default Counter;