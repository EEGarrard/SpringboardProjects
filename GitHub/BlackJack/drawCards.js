// drawCards.js


async function DrawCards() {
  try {
    // Fetch shuffled deck
    const deckResponse = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    const deckData = await deckResponse.json();
    const deckId = deckData.deck_id;

    // Fetch 2 cards from the deck
    const cardResponse = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
    );
    const cardData = await cardResponse.json();

    // Return the cards
    return cardData.cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
    return []; // Return empty array if error occurs
  }
}
