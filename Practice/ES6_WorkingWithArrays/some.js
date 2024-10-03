let nums = [1, 2, 3];

let words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "banana", // duplicate
];
const underTwo = nums.some(function (val, i, arr) {
  return val < 2;
});

const overThree = nums.some(function (val, i, arr) {
  return val > 3;
});
console.log(underTwo); // true

console.log(overThree); // false

const mango = words.some(function (word) {
  return words.indexOf("mango");
});

console.log(mango); // true

function mySome (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

const containsBanana = mySome(words, function(word) {
    return word === "banana";
})

console.log(containsBanana); // true

function myEvery (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

const allUnderTwo = myEvery(nums, function(val) {
    return val < 2;
})

console.log(allUnderTwo); // false