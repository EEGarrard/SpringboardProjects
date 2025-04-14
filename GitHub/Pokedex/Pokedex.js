function Pokedex({ pokemon }) {
  return (
      <div className="pokecard">
          <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
          />
          <h3>{pokemon.name}</h3>
          <p>Type: {pokemon.type}</p>
          <p>EXP: {pokemon.base_experience}</p>
      </div>
  );
}