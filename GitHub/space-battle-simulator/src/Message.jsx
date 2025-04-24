import React from "react";

const Message = ({ myHealth, enemyHealth }) => {
  
      let displayMessage
      if (myHealth === 0 && enemyHealth === 0)
      {displayMessage = <h3>Tie!</h3>}
      else if (myHealth === 100 && enemyHealth ===100) {
        displayMessage = <h3>Fire Away!</h3>
      }
      else if (myHealth === 0)
      {displayMessage = <h3>You lose!</h3>} else if (enemyHealth === 0)
      {displayMessage = <h3>You win!</h3>} else
      {displayMessage = <h3>Keep fighting!</h3>}

      return (
        <div>
            {displayMessage}
        </div>
      )
  
};

export default Message;
