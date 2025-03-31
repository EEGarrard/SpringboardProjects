function Pokegame({ pokemon }) {
    // Fisher-Yates Shuffle
    const shuffledPokemon = [...pokemon];
    for (let i = shuffledPokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPokemon[i], shuffledPokemon[j]] = [shuffledPokemon[j], shuffledPokemon[i]]; // Swap
    }
  
    const handOne = shuffledPokemon.slice(0, 4); // Hand 1: First 4 Pokémon
    const handTwo = shuffledPokemon.slice(4, 8); // Hand 2: Next 4 Pokémon
  
    const totalHandOneEXP = handOne.reduce(
      (total, mon) => total + mon.base_experience,
      0
    );
    const totalHandTwoEXP = handTwo.reduce(
      (total, mon) => total + mon.base_experience,
      0
    );
  
    const isHandOneWinner = totalHandOneEXP > totalHandTwoEXP;
    const winMessage = "This hand wins!";
  
    return (
      <div>
        <h2>Pokémon Battle: Hands</h2>
        <div className="hands-container">
          {/* Hand 1 */}
          <div className="hand">
            <h3>Hand 1</h3>
            {handOne.map((pokemon) => (
              <div key={pokemon.id} className="pokedex-card">
                <Pokedex
                  pokemon={pokemon}
                  isWinner={isHandOneWinner}
                />
              </div>
            ))}
            {isHandOneWinner && <p className="winner-message">{winMessage}</p>}
          </div>
  
          {/* Hand 2 */}
          <div className="hand">
            <h3>Hand 2</h3>
            {handTwo.map((pokemon) => (
              <div key={pokemon.id} className="pokedex-card">
                <Pokedex
                  pokemon={pokemon}
                  isWinner={!isHandOneWinner}
                />
              </div>
            ))}
            {!isHandOneWinner && <p className="winner-message">{winMessage}</p>}
          </div>
        </div>
      </div>
    );
  }
  