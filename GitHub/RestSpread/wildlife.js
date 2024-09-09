/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function trackAnimals(...animalNames){
    console.log(`Sightings of animals: ${animalNames}`);
}

trackAnimals("Elephant", "Giraffe", "Hippopotamus");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const allHabitats = [...forestHabitats, ...savannahHabitats];
console.log(allHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const newPopulation = {...rhinoStatus, name: "Rhino", population: 200, habitat: "Savannah C"}
console.log(newPopulation);


/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const newLion = {...lionProfile, genetics: "Mountain Lion"}

console.log(newLion);
console.log(lionProfile);
/*
 * Observations:
 * TODO: Explain here.
 * Updating the new object with the spread operator does not affect the original object.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
const healthUpdate = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Moderate"}}
console.log(ecosystemHealth)
console.log(healthUpdate)

/*

 * Observations:
 * TODO: Explain here.
 * The original copy is not modified because the modificataion only affect the shallow copy that was created with the spread modifier.
 */
