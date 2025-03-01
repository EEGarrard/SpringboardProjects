// go to the spoonacular api, get random recipe //
// click a button ad display that recipe //
// the browser needs to display it //

const spoonacularAPIKEY = "969fa647cc4046d2b4249145d9083c99";

// axios
//   .get(
//     `https://api.spoonacular.com/recipes/random
// ?apiKey=${spoonacularAPIKEY}`
//   )
//   .then((response) => {
//     console.log(response);
//   });

const button = document.getElementById("generate-button");
const displayDiv = document.getElementById("display-div");
button.addEventListener("click", () => {
  // console.log("Click")
  getRandomRecipe();
});

async function getRandomRecipe() {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`
  );
  console.log(response);

  displayDiv.innerHTML = ""
  //create a new div
  let newDiv = document.createElement("div");
  let h3 = document.createElement("h3");

  h3.innerHTML = response.data.recipes[0].title;
  displayDiv.appendChild(h3)

  //set recipe title into the header

  newDiv.innerHTML = response.data.recipes[0].summary;
  displayDiv.appendChild(newDiv);
}
