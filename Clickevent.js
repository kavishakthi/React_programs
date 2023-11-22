import React from "react";

function Clickevent()
{
    function welcome()
    {
        console.log("Helllelloooo")
    }
    return(
        <div>
            <button onClick={welcome}> Press </button>
        </div>
    )
}

export default Clickevent;