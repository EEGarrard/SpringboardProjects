import React from "react";
import "./UserHealth.css"

const RestartButton = ({ onClick, disabled = false }) => {
   
  return (
    <button 
      className="restartButton"
      onClick={onClick}
      disabled={disabled}
    
    >
      NEW BATTLE
    </button>
  );
};

export default RestartButton;