import React from "react";
import "./Circles.css"

const Circle = ({color, idx, x, y, changePosition}) => {
    return (
        <div className="Circle"
        onClick={() => changePosition(idx)}
        style={{ 
            backgroundColor: color,
            position: 'absolute',
            top: `${y}vh`,
            left: `${x}vw`
        }}>
            {idx + 1}
        </div>
    )
}

export default Circle;