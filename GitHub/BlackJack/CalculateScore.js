// CalculateScore.js

// Declare the function in the global scope
function ScoreCalculator({ cards }) {
    function calculateScore(cards) {
      let totalScore = 0;
  
      cards.forEach(card => {
        if (card.value === "ACE") {
          totalScore += 11;  // Aces are worth 11
        } else if (
          card.value === "KING" ||
          card.value === "QUEEN" ||
          card.value === "JACK" ||
          card.value === "10"
        ) {
          totalScore += 10;  // Face cards (KING, QUEEN, JACK, 10) are worth 10
        } else {
          totalScore += parseInt(card.value);  // Other cards are worth their numeric value
        }
      });
  
      return totalScore;
    }
  
    const score = calculateScore(cards);  // Calculate the score
  
    return (
      <div>
        <div>Total Score: {score}</div>
        {score === 21 && <div>You have Blackjack!</div>}
      </div>
    );
  }
  