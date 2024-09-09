function sum(...nums) {
  return nums.reduce((sum, n) => sum + n);
}
// console.log(sum(1,2,3,4,5))

const sumAll = (...values) => {
  if (!values.length) return undefined;
  return values.reduce((sum, n) => sum + n);
};
// console.log(sumAll(1,2,3,4,5));

// function makeFamily('cindy', 'peter', 'cody', 'carly') {
//     parent1: 'cindy',
//     parent2: 'peter',
//     children: ['cody', 'carly']
// }

// function makeFamily(parent1, parent2, ...kids) {
//   return {
//     parents: [parent1, parent2],
//     children: kids.length ? kids : 0,
//   };
// }

// // console.log(makeFamily("cindy", "peter"))

// const filterByType = (type, ...vals) => {
//     return vals.filter((v) => typeof v === type);
// };

// console.log(filterByType('boolean', 23, 34, true, false, 0, "hello world"));

// function takesFour(one,two,three,four){
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
// }
// const names = ['John','Paul','Geoge', 'Ringo']
// takesFour(...names)

// const nums = [2, 5, 65, 29, 35, 23];

// const max = Math.max(...nums);
// console.log(max);

const palette = ["lavender berry", "sunflower yellow", "orchid orange"];
// const paletteCopy = palette.slice();
const paletteCopy = [...palette];
console.log(paletteCopy);
console.log(paletteCopy === palette);
