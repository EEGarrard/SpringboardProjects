import React from "react";
import { useState } from "react";
import Die from "./Die";
import "./Dice.css";

const Dice = ({ numDice = 6, title = "Main Game", maxVal = 20 }) => {
  const [numbers, setNumbers] = useState(Array(numDice).fill(1));
  const [isRolling, setIsRolling] = useState(false);
  const [isReadyToRoll, setIsReadyToRoll] = useState(true);

  const rollDice = () => {
    setIsRolling(true);
    setIsReadyToRoll(false);
    
    // Animation duration
    setTimeout(() => {
      setNumbers(numbers.map(() => Math.floor(Math.random() * maxVal) + 1));
      setIsRolling(false);
      setIsReadyToRoll(true);
    }, 1000);
  };

  return (
    <div className="dice-container">
      <h2 className="game-title">{title}</h2>
      <div className="dice-grid">
        {numbers.map((num, index) => (
          <Die key={index} val={num} rolling={isRolling} />
        ))}
      </div>
      <button
        className={`roll-btn ${isReadyToRoll ? 'roll-ready' : ''}`}
        onClick={rollDice}
        disabled={isRolling}
      >
        Roll Dice
      </button>
    </div>
  );
};

export default Dice;