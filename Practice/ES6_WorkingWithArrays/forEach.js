let arr = [1, 2, 3];

arr.forEach(function (value, index, array) {
  console.log(value, index, array);
});

const colors = ["teal", "cyan", " peach", "purple"];

const yell = (val, i) => {
  const caps = val.toUpperCase();
  console.log(`At index ${i}, value ${caps}`);
};

colors.forEach(yell);

// const prices = [30.99, 19.99,2.5,99.0]
// let total = 0;
// prices.forEach(function(price) { total += price;});

// console.log(total);

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
for (let price of prices) {
  total += price;
}
console.log(total);

const bjjMoves = [
  "Knee Cut",
  "Heel Hook",
  "Scissor Sweep",
  "Butterfly Sweep",
  "X-Guard"
]

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);}  
}

forEach(bjjMoves, function(move, i) {
  console.log(move.toUpperCase(), 'at index of', i);
})

//same as

bjjMoves.forEach(function(move, i) {
  console.log(move.toUpperCase(), 'at index of', i);
})