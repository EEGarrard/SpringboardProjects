// // const teaOrder = {
// //     variety: 'green',
// //     teaName: 'Winter Sprout',
// //     origin: 'Taiwan',
// //     price: 12.99,
// //     hasCaffeine: true,
// //     quantity: 3
// // };

// //const price = teaOrder.price
// //const quantity = teaOrder.quantity
// //const teaName = teaOrder.teaName

// // const{price, quantity, ...others} = teaOrder;
// // const{brewTemp: temp = 175} = teaOrder;
// // console.log(temp)
// //const {country} = teaOrder
// // console.log(others)

// //Defaults with destructuring
// // const options =  {
// //     refreshTime: 200
// // }
// // const {refreshTime = 750, waitTime = 1000} =  options;
// // console.log(refreshTime); //200 initialized in options
// // console.log(waitTime); // 1000 - fallback to default

// //Renaming with destructuring
// // const instructorData = {
// //     name: 'Colt',
// //     job: 'Instructor',

// // };
// // const {name: instructorName, job: occupation} = instructorData;

// // console.log(instructorName); // Colt
// // console.log(occupation); //Instructor

// // const {teaName: tea} = teaOrder
// // console.log(tea)

// // function checkout(tea) {
// //     const {quantity = 1, price} = tea
// //     return quantity * price

// // }

// // console.log(checkout(teaOrder))

// // const order1 = {
// //     variety: 'white',
// //     teaName: 'Silver Needle',
// //     origin: 'Taiwan',
// //     price: 12.99,
// //     hasCaffeine: true,
// // };

// // console.log(checkout(order1))

// //The Same Concept Can be applied to arrays
// // const myFavoriteThings = ['teaching', 'music', 'hiking', 'dank memes'];
// // const [first, second, ...others] = myFavoriteThings;
// // console.log(first);
// // console.log(second);
// // console.log(others)

// const students = [
//     { name: 'Drake', gpa: 4.6},
//     { name: 'Henrietta', gpa: 4.4},
//     { name: 'Tung', gpa: 4.0},
//     {name: 'Harry', gpa: 3.8},
//     {name: 'Ant', gpa:3.2}
// ];
// const [topStudent, secondBest,,fourth] = students;

// console.log(topStudent, secondBest, fourth);
// const [first, ...losers] = students;
// console.log(first);
//  console.log(...losers);

// //We can use destructuring to extract key/value pairs from an object into variables.
// function makeInstructor(settings) {
//     let name = settings.name;
//     let age = settings.age;
// }

// //We're going to assume that the function is passed an object with a key of name and age.
// function myFunc (name, age) {
//     let name = name;
//     let age = age;
// }

// const order2 = {
//     teaName: 'Green Tea',
//     variety: 'Silver Needle',
//     origin: 'Taiwan',
//     price: 12.99,
//     hasCaffeine: true,
// }

// function getTotal ({qty = 1, price, ...others}) {
//     console.log(qty * price);
// }

// getTotal(order2)

// const longJumpResults = ['Tammy', 'Jessica', 'Violet']
// const swimMeetResults = ['Japan', 'France', 'Chile']
// function awardMedals ([gold, silver, bronze]) {
//     return {
//         gold, silver, bronze
//     }
//     }

//     console.log(awardMedals(longJumpResults))
//     console.log(awardMedals(swimMeetResults))

// function makeColor(name, hex) {
//   const color = {};
//   color[name] = hex;
//   color[hex] = name;
//   return color;
// }

// function makeColor(name, hex) {
//   return {
//     [name]: hex,
//     [hex]: name,
//   };
// }

// console.log(makeColor("red", "#FF0000")); // { red: '#FF0000', '#FF0000':'red' }

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let temp = delicious
// delicious = disgusting
// disgusting = delicious
// console.log(delicious)

// let both = [delicious, disgusting];
// [disgusting, delicious] = both;

[delicious, disgusting]= [disgusting, delicious];
console.log(delicious)
