import React from "react";
import { useState } from "react";

const ColorButtons = ({ options, addCircle }) => {
  return (
    <div>
      {options.map((color) => (
        <button onClick={() => addCircle(color)} className="color-btn" style={{backgroundColor: color, margin: 10}}>
            {color}
        </button>
      ))}
    </div>
  );
};

export default ColorButtons;
