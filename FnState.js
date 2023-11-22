import React, {useState} from "react";
function FnState()
{
    //0 -> initial value assigned to count variable
    const[count , setcount] = useState(0)
    return(
        
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>Functional Change State </button>
        </div>
        
    )
}

export default FnState;