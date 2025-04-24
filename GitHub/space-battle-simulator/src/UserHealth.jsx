import React, { useState } from "react";
import getRandomNum from "./Random";
import "./UserHealth.css";
import Message from "./Message";
import RestartButton from "./Restart";

const Health = () => {
    const [myHealth, setMyHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);

    const handleAttack = () => {
        const playerDamage = getRandomNum();
        setEnemyHealth(prev => Math.max(0, prev - playerDamage));

        const enemyDamage = getRandomNum();
        setMyHealth(prev => Math.max(0, prev - enemyDamage));
    };

    const restartGame = () => {
        setMyHealth(100);
        setEnemyHealth(100);
    };

    return (
        <div className="gameContainer">
        <div className="healthContainer">
            <div className="myHealth">My Health: {myHealth}</div>
            <div className="enemyHealth">Enemy Health: {enemyHealth}</div>
        </div>
        
        <button className="fireButton" onClick={handleAttack}>Fire</button>
        
        <Message myHealth={myHealth} enemyHealth={enemyHealth} />
        
        <RestartButton onClick={restartGame} />
    </div>
    
    );
    
};

export default Health;
