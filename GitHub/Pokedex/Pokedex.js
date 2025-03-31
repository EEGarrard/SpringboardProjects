function Pokedex({ pokemon, totalEXP, isWinner }) {
    return (
      <div className="pokedex-container">
        <div className="pokecard">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
          <p>{pokemon.type}</p>
          <p>EXP: {pokemon.base_experience}</p>
        </div>
      </div>
    );
  }
  