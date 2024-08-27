let deckID = null;
let remainingCards = 0;

// Function to initialize a new deck and shuffle it
function initializeDeck() {
    const newDeckAPI = "https://deckofcardsapi.com/api/deck/new/";

    // Fetch a new deck from the Deck of Cards API
    return fetch(newDeckAPI)
        .then(response => response.json())
        .then(data => {
            deckID = data.deck_id; // Update deckID
            remainingCards = data.remaining; // Store the initial count
            console.log(`Deck initialized with ID: ${deckID}`);

            // Shuffle the deck
            return fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/?remaining=true`);
        })
        .then(() => {
            console.log("Deck shuffled");
            updateCardCount(); // Update card count on UI
            showDrawButton(true); // Show the draw button
            showNoCardsMessage(false); // Hide the no cards message
            return deckID; // Return deckID for further use
        })
        .catch(err => console.error("Error initializing or shuffling the deck:", err));
}

// Function to draw a card from the deck
function drawCard() {
    if (!deckID) {
        console.error("Deck not initialized.");
        return Promise.reject("Deck not initialized.");
    }

    const drawAPI = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;

    // Fetch one card from the deck
    return fetch(drawAPI)
        .then(response => response.json())
        .then(data => {
            if (data.cards.length > 0) {
                remainingCards = data.remaining; // Update the remaining cards count
                return data.cards[0]; // Return the first card from the response
            } else {
                throw new Error("No more cards left in the deck.");
            }
        })
        .catch(err => console.error("Error drawing card:", err));
}

// Function to update the UI with the drawn card
function updateCardUI(card) {
    const cardText = document.getElementById('cardText');
    const cardImage = document.getElementById('cardImage');

    cardText.textContent = `${card.value} of ${card.suit}`;
    cardImage.src = card.image;
}

// Function to update the remaining card count in the UI
function updateCardCount() {
    const cardCount = document.getElementById('cardCount');
    cardCount.textContent = remainingCards;

    // Show message if no cards left
    if (remainingCards === 0) {
        showDrawButton(false); // Hide draw button
        showNoCardsMessage(true); // Show no cards message
    } else {
        showNoCardsMessage(false); // Hide no cards message
    }
}

// Function to show or hide the draw button
function showDrawButton(show) {
    document.getElementById('drawButton').style.display = show ? 'block' : 'none';
}

// Function to show or hide the no cards message
function showNoCardsMessage(show) {
    document.getElementById('noCardsMessage').style.display = show ? 'block' : 'none';
}

// Function to handle drawing a card when the button is clicked
function onDrawButtonClick() {
    drawCard()
        .then(card => {
            updateCardUI(card);
            updateCardCount(); // Update the card count after drawing
        })
        .catch(err => {
            console.error("Error in draw card process:", err);
            alert("No more cards left in the deck.");
            showDrawButton(false);
            showNoCardsMessage(true);
        });
}

// Function to handle getting a new deck when the button is clicked
function onNewDeckButtonClick() {
    initializeDeck();
}

// Initialize deck on page load
initializeDeck().then(() => {
    const drawButton = document.getElementById('drawButton');
    const newDeckButton = document.getElementById('newDeckButton');

    drawButton.addEventListener('click', onDrawButtonClick);
    newDeckButton.addEventListener('click', onNewDeckButtonClick);
});
