let vacationDays = 3; // Initial vacation days
function mysteryOperation() {
  const outcome = Math.random(); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
    return true;
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}




function vacation() {
  for (let i = 0; i <= 20; i++) { // Loop 20 times
    try {
      if (mysteryOperation()) {
        console.log("Enjoy your vacation!");
        vacationDays += 13; // Add 13 days on success

      }
    } catch (err) {
      console.log("Mission failed. Sorry, but your vacation is cancelled.");
      vacationDays += 1; // Add 1 day on failure
    }
	console.log("") // Empty line for readability
  }
  // on final attempt
  console.log("Finished all attempts. Final vacation days:", vacationDays);
}

vacation(); // Call the vacation function
