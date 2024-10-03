let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra", "Monkey"];

const lion = animals.find(function (animal) {
  return animal === "Lion";
});

const lionIndex = animals.findIndex(function (animal) {
  return animal === "Lion";
});

console.log(lion);

console.log(lionIndex);

const scores = [0, 0, 0, 0, 3, 4, 6, 7, 8, 9, 10];
scores.find(function (score) {
  return score % 2 === 0;
});
const firstEven = scores.findIndex(function (score) {
  return score !== 0 && score % 2 === 0;
});

function partition(arr, pivot) {
  const pivotIndex = arr.findIndex(function (el) {
    return el > pivot;
  });
  const left = arr.slice(0, pivotIndex);
  const right = arr.slice(pivotIndex);
  return [left,...right];
}

 console.log(partition(scores, 0))
