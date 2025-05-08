import React from "react";
import './App.css'
const Star = ({ id, x, y, size, onDestroy }) => {
  return (
    <div
      className="star"
      tabIndex={0}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        position: "absolute",
        backgroundColor: "lightgoldenrodyellow",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
      }}
      onClick={() => onDestroy(id)}
      onKeyDown={(e) => e.key === "Enter" && onDestroy(id)}
    ></div>
  );
};

export default Star;
