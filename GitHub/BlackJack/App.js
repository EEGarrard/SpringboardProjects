// App.js

function App() {
    const [cards, setCards] = React.useState([]); // Declare React state
  
    // Function to fetch new cards when the button is clicked
    const fetchNewCards = async () => {
      const cardData = await DrawCards(); // Call DrawCards function to fetch new cards
      setCards(cardData); // Update the state with the new cards
    };
  
    React.useEffect(() => {
      fetchNewCards(); // Fetch initial cards when the component mounts
    }, []); // Empty dependency array ensures this runs only once
  
    return (
      <div>
        <h1>Blackjack</h1>
        <div>
          {cards.length === 2 ? (
            cards.map((card, index) => (
              <img key={index} src={card.image} alt={card.code} />
            ))
          ) : (
            <p>Loading cards...</p>
          )}
        </div>
        {cards.length === 2 && <ScoreCalculator cards={cards} />}
        
        {/* Button to fetch new cards */}
        <button onClick={fetchNewCards}>Get New Cards</button>
      </div>
    );
  }
  
  // Render the app
  ReactDOM.render(<App />, document.getElementById('root'));
  