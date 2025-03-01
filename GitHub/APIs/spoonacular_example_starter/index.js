const spoonacularAPIKEY = "969fa647cc4046d2b4249145d9083c99";

// axios.get('https://api.spoonacular.com/recipes/random?apiKey=969fa647cc4046d2b4249145d9083c99').then((response) => {
//     console.log(response);
    
//     console.log(response.data.recipes[0].title);
    
// })

axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}&cuisine=japanese`).then((response) => {
    console.log(response);
    console.log(response.data.results[0].title)
})