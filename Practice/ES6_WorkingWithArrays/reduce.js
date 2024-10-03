const nums = [12, 23, -1, 39, 21, 90, 42, -4, 120];

let total = 0;
for (let num of nums) {
  total += num;
}

console.log("Total:", total);

let min = nums[0];
for (let i = 1; i <= nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
  }
}

console.log("Minimum:", min);

const str = "lollapalooza";
const charFreq = {};
for (let char of str) {
  if (charFreq[char]) {
    charFreq[char]++;
  } else {
    charFreq[char] = 1;
  }
}

console.log("Character frequency:", charFreq);

const words = ["hello", " I", " love", " you"];
words.reduce(function (accum, nextWord) {
  console.log(accum, nextWord);
  return accum + nextWord;
});

const midTermScores = [70, 88, 93, 65, 90, 97, 56];
const finalsScores = [92, 96, 35, 90, 78, 66, 70];

const minMidtermScore = midTermScores.reduce(function (min, nextScore) {
  return nextScore < min ? min : nextScore;
});
const maxScore = midTermScores.reduce(function (max, nextScore) {
  return nextScore > max ? max : nextScore;
});

const minOverallScore = finalsScores.reduce(function (min, nextScore) {
  return nextScore > min ? min : nextScore;
}, minMidtermScore);

console.log("Minimum score:", minMidtermScore);

console.log("Maximum score:", maxScore);

console.log("Minimum overall score:", minOverallScore);
