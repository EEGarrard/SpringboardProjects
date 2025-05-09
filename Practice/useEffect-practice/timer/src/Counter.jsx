import React, {use, useEffect, useState} from "react";

function Counter () {
    const [num, setNum]= useState(0);
    const increment = () => {
        setNum(n => n+1);
    }

    useEffect(() =>{
        document.title = `Hi${'!'.repeat(num)}`
    })
    return (
        
        <div>
            
        Let's get excited!<div>
        <button onClick={increment}>Get more excited.</button>
        <p>Counter: {num} </p></div>
        </div>
        
    )
}

export default Counter