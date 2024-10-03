const words = [
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
];

const isVowel = function (char) {
  return "aeiou".indexOf(char) !== -1;
};

const containsVowel = function (word) {
  for (let char of word) {
    if (isVowel(char)) {
      return true;
    }
  }
  return false;
};
const noVowels = words.filter(function (word) {
  return !containsVowel(word);
});

words.filter(function (word) {
  return word.length > 5;
});

const containVowels = words.filter(containsVowel);

console.log(noVowels);

function myFilter(arr, callback) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

const shorties = myFilter (words, function(word) {
    return word.length <= 5;
})

console.log(shorties);