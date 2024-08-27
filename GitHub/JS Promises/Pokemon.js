// Function to pick and display random Pokémon
function pickRandomPokemon() {
    const containerIds = ['pokemonContainer1', 'pokemonContainer2', 'pokemonContainer3'];
    const called = new Set();

    // Fetch Pokémon data and process 3 random Pokémon
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then((data) => {
            const numberOfPokemon = data.results.length;
            const randomPokemonUrls = [];
            
            // Pick 3 unique random Pokémon URLs
            while (randomPokemonUrls.length < 3) {
                const randomPokemon = Math.floor(numberOfPokemon * Math.random());
                const randomPokemonUrl = data.results[randomPokemon].url;

                if (!called.has(randomPokemonUrl)) {
                    called.add(randomPokemonUrl);
                    randomPokemonUrls.push(randomPokemonUrl);
                }
            }

            // Fetch details for each random Pokémon
            return Promise.all(randomPokemonUrls.map(url => fetch(url).then(response => response.json())));
        })
        .then(pokemonDataArray => {
            // Fetch species data for each Pokémon
            const fetchSpeciesPromises = pokemonDataArray.map(pokemonData => 
                fetch(pokemonData.species.url).then(response => response.json())
            );

            return Promise.all([pokemonDataArray, Promise.all(fetchSpeciesPromises)]);
        })
        .then(([pokemonDataArray, speciesDataArray]) => {
            // Create Pokémon cards and display them in containers
            pokemonDataArray.forEach((pokemonData, i) => {
                const speciesData = speciesDataArray[i];

                // Get English flavor text
                const descriptionObj = speciesData.flavor_text_entries.find(entry => entry.language.name === "en");
                const description = descriptionObj ? descriptionObj.flavor_text : "No description available.";

                // Create the Pokémon card
                const { name, sprites } = pokemonData;
                const imgSrc = sprites.front_default;

                // Select the container and display the Pokémon
                const containerId = containerIds[i];
                const container = document.getElementById(containerId);
                if (container) {
                    container.innerHTML = makePokeCard(name, imgSrc, description);
                }
            });
        })
        .catch((error) => console.log("Error fetching Pokémon: ", error));
}

// Helper function to create Pokémon card HTML
function makePokeCard(name, imgSrc, description) {
    return `
        <div class="card">
            <h1>${name}</h1>
            <img src="${imgSrc}" alt="${name}" />
            <p>${description}</p>
        </div>
    `;
}

// Add event listener to the button
document.getElementById('PokemonButton').addEventListener('click', pickRandomPokemon);
