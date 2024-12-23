import React, { useState } from "react";
import './Sample.css';


function Sample(){
   const [count,setCount]=useState(0)

   const showIncrement=()=>{
       setCount(count+1)
   }
   const showdecrement=()=>{
   if(count>0){
    setCount(count-1)
   }
}
    return(
        <div>
            <h1 className="header">Welcome to all</h1>
            <p>Count:{count}</p>
            <button onClick={showIncrement}>Increment</button>
            <button onClick={showdecrement}>Decrement</button>
        </div>
    )
}
export default Sample;