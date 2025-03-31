function Pokecard({ mon }) {
    return (
      <div className="pokecard">
        <h2>{mon.name}</h2>
        <p>Type: {mon.type}</p>
        <p>EXP: {mon.base_experience}</p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mon.id}.png`}
          alt={mon.name}
        />
      </div>
    );
  }
  