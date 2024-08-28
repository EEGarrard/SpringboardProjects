// Function to pick and display random Pokémon
function pickRandomPokemon() {
    // Array of container IDs for displaying Pokémon cards
    const containerIds = ['pokemonContainer1', 'pokemonContainer2', 'pokemonContainer3'];
    
    // Array to store fetched Pokémon data
    const called = new Set();

    // Fetch Pokémon data and process 3 random Pokémon
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((response) => response.json())
        .then((data) => {
            // Get the total number of Pokémon in the API
            const numberOfPokemon = data.results.length;

            const randomPokemonUrls = [];
            
            // Pick 3 unique random Pokémon URLs
            while (randomPokemonUrls.length < 3) {
                // Generate a random number between 0 and the total number of Pokémon
                const randomPokemon = Math.floor(numberOfPokemon * Math.random());
                
                // Fetch details for the random Pokémon
                const randomPokemonUrl = data.results[randomPokemon].url;

                if (!called.has(randomPokemonUrl)) {
                    // Fetch the Pokémon details and add it to the called set
                    called.add(randomPokemonUrl);
                    
                    // Add the Pokémon URL to the array
                    randomPokemonUrls.push(randomPokemonUrl);
                }
            }

            // Fetch details for each random Pokémon
            return Promise.all(randomPokemonUrls.map(url => fetch(url).then(response => response.json())));
        })
        .then(pokemonDataArray => {
            // Fetch species data for each Pokémon
            const fetchSpeciesPromises = pokemonDataArray.map(pokemonData => 
                // Fetch the species data for the current Pokémon
                fetch(pokemonData.species.url).then(response => response.json())
            );
            // Fetch abilities data for each Pokémon
            return Promise.all([pokemonDataArray, Promise.all(fetchSpeciesPromises)]);
        })
        .then(([pokemonDataArray, speciesDataArray]) => {
            // Create Pokémon cards and display them in containers
            pokemonDataArray.forEach((pokemonData, i) => {
                // Get species data for the current Pokémon
                const speciesData = speciesDataArray[i];

                // Get English flavor text
                const descriptionObj = speciesData.flavor_text_entries.find(entry => entry.language.name === "en");
                
                // Get the Pokémon description or a default message if no description is available
                const description = descriptionObj ? descriptionObj.flavor_text : "No description available.";

                // Create the Pokémon card
                const { name, sprites } = pokemonData;
                
                // Get the Pokémon image source (front_default for default size)
                const imgSrc = sprites.front_default;

                // Select the container and display the Pokémon
                const containerId = containerIds[i];
                
                // Get the selected container and display the Pokémon in it
                const container = document.getElementById(containerId);

                if (container) {
                    // Display the Pokémon card in the selected container
                    container.innerHTML = makePokeCard(name, imgSrc, description);
                }
            });
        })

        .catch((error) => console.log("Error fetching Pokémon: ", error));
}

// Helper function to create Pokémon card HTML
function makePokeCard(name, imgSrc, description) {
    // Create the Pokémon card HTML and return it as a string
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
