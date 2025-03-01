// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const button = document.getElementById("button");
const displayDiv = document.getElementById("displayDiv");
displayDiv.innerHTML = ""
button.addEventListener("click", (event) => {
    event.preventDefault();
    const query = document.getElementById("search-input").value;

    console.log("button clicked");
  getRandomGiphy(query);
});

async function getRandomGiphy(query) {
    
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}&limit=10`)
    console.log(response);
    
    let img = document.createElement("img");
    img.src = response.data.data[0].images.fixed_width.url;
    img.classList.add("gif");
   displayDiv.appendChild(img); 

}

// clear the display
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    displayDiv.innerHTML = ""
});


