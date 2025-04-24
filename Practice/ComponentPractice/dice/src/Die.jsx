import React from "react";
import "./Die.css";

const Die = ({ val, rolling = false }) => {
  return (
    <div className={`die ${rolling ? 'rolling' : ''}`} data-val={val}>
      {Array.from({ length: val }).map((_, i) => (
        <span key={i} className="dot" />
      ))}
    </div>
  );
};

export default Die;