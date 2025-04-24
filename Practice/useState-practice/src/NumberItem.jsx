import React from "react";

const NumberItem = ({n, remove}) =>
{
     const handleRemove = () => {
        remove(n)
     }
    return (
        <li>
          <button onClick={handleRemove}>{n}</button>
        </li>
    )
}

export default NumberItem