import React, { useState, useEffect } from "react";

const Deck = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [deckId, setDeckId] = useState(null);
  const [remaining, setRemaining] = useState(52);

  useEffect(() => {
    async function fetchDeck() {
      const response = await fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      const data = await response.json();
      console.log(data);
      setDeckId(data.deck_id); //store deck id
      setRemaining(data.remaining);
    }
    fetchDeck();
  }, []); // Empty array = runs once when component mounts

  const handleDraw = async () => {
    if (!deckId || remaining === 0) {
      alert(remaining === 0 ? "No cards remaining!" : "Deck not ready");
      return;
    }
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    );
    const data = await response.json();
    console.log("Drawn card:", data.cards[0]);
    console.log("Remaining: ", data.remaining);
    setCurrentCard(data.cards[0]);
    setRemaining(data.remaining);
  };

  const HandleNewDeck = async () => {
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const data = await response.json();
    setDeckId(data.deck_id);
    setRemaining(data.remaining);
    setCurrentCard(null)
  };

  return (
    <div>
      <h1>Deck of Cards</h1>

      {currentCard && (
        <img
          src={currentCard.image}
          alt={`${currentCard.value} of ${currentCard.suit}`}
        />
      )}
      <div className="controls">
        <button onClick={handleDraw}>Draw a Card</button>
        <button onClick={HandleNewDeck}>New Deck</button>
        <div className="remaining">Remaining cards: {remaining}</div>
      </div>
    </div>
  );
};

export default Deck;
