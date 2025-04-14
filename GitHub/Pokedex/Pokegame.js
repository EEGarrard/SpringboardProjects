function Pokegame({ pokemon }) {
  // Fisher-Yates Shuffle
  const shuffledPokemon = [...pokemon];
  for (let i = shuffledPokemon.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPokemon[i], shuffledPokemon[j]] = [shuffledPokemon[j], shuffledPokemon[i]];
  }

  const handOne = shuffledPokemon.slice(0, 4);
  const handTwo = shuffledPokemon.slice(4, 8);

  const totalHandOneEXP = handOne.reduce((total, mon) => total + mon.base_experience, 0);
  const totalHandTwoEXP = handTwo.reduce((total, mon) => total + mon.base_experience, 0);

  const isHandOneWinner = totalHandOneEXP > totalHandTwoEXP;
  const winMessage = "THIS HAND WINS!";

  return (
      <div className="game-container">
        
          <h2>Pokémon Battle</h2>
          <div className="hands-container">
              <div className="hand">
                  <h3>Hand 1 (Total EXP: {totalHandOneEXP})</h3>
                  <div className="pokemon-grid">
                      {handOne.map((pokemon) => (
                          <Pokedex key={pokemon.id} pokemon={pokemon} />
                      ))}
                  </div>
                  {isHandOneWinner && <p className="winner-message">{winMessage}</p>}
              </div>

              <div className="hand">
                  <h3>Hand 2 (Total EXP: {totalHandTwoEXP})</h3>
                  <div className="pokemon-grid">
                      {handTwo.map((pokemon) => (
                          <Pokedex key={pokemon.id} pokemon={pokemon} />
                      ))}
                  </div>
                  {!isHandOneWinner && <p className="winner-message">{winMessage}</p>}
              </div>
          </div>
      </div>
  );
}