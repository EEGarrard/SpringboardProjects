import React, { useState } from "react";
import Grandchild from "./Grandchild";
import CountContext from "./CountContext";
function Child() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
     <CountContext.Provider value = {{count, increment}}>
    <div
      style={{
        border: "4px solid #0074D9",
        margin: "1rem",
        width: "500px",
      }}
    >
      <p>I'm the child!</p>
      <p>I own count, it is: {count}</p>
      <button onClick={increment}>Add to Count</button>
      <Grandchild />
    </div>
     </CountContext.Provider>
  );
}

export default Child;
