import React, { useState, useContext } from "react";
import CountContext from "./CountContext";
import ThemeContext from "./ThemeContext";
function Greatgrandchild() {
  const { count, increment } = useContext(CountContext);
  const color = useContext(ThemeContext);
  return (
    <div style={{ border: "4px solid #7fdbff", margin: "1rem" }}>
      <p>I'm the Great-grandchild!</p>
      <p>Count: {count}</p>
      <button style={{ color }} onClick={increment}>
        Add one
      </button>
    </div>
  );
}

export default Greatgrandchild;

// -TodoApp - [{id:1, text: "walk the dog!"}]
//     -TodoForm
//     -TodosList
//         -TodoItems
