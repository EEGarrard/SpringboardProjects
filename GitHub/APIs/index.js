// axios.get("https://catfact.ninja/fact").then((response) => {
//   console.log(response);
//   console.log(response.data.fact);
// });

// axios.get("https://official-joke-api.appspot.com/random_joke").then((response) => {
//     console.log(response);
//     console.log(response.data.setup);
//     console.log(response.data.punchline);
//   })

axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {
console.log(response);
  console.log(response.data.data[0].Population);
})