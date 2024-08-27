const fetchedFacts = new Set();

// Function to fetch a fact for a given number
function getFact(number, numberOfFacts) {
  if (numberOfFacts <= 0) return; // Base case: Stop if no more facts needed

  let numbersAPI = `http://numbersapi.com/${number}?json`;

  // Fetch the fact from the Numbers API
  fetch(numbersAPI)
    .then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      const fact = data.text;
      // Check if the fact has already been fetched
      if (fetchedFacts.has(fact)) {
        if (numberOfFacts === 1) {
          console.log("No more unique facts found.");
          return; // Exit the function if no unique facts were found
        } else {
        console.log("Duplicate fact, fetching a new one...");
        //Retry
        numberOfFacts -= 1;
        getFact(number, numberOfFacts);
        return;
      }} else {
        // Decriment fact requests by one
        numberOfFacts -= 1;
        console.log(fact); // Log the data to the console
        fetchedFacts.add(fact); // Add the fact to the set of fetched facts
        getFact(number, numberOfFacts);
      }
    })
    .catch((err) => console.log("Error fetching fact:", err)); // Handle errors
  // Recursively call the function with the next number if there are still facts to fetch
}

getFact(-32, 5);
