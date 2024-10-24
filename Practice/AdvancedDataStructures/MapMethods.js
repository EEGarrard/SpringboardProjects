//const myMap = new Map();
//myMap.set(7, 'seven')
//myMap.set('7', 'seven string')

//const empty = [];
//myMap.set(empty, 'empty array');
//myMap.set(true, 'true');
//myMap.get(7);

// const add = (x,y) => x + y;
// const mult = (x,y) => x*y;
// const funcCalls = new Map();

// funcCalls.set(add, 0);

// funcCalls.set(mult, 0);
const bandData= [
[3, 'Three Doors Down'],
['three', 'Three Dog Night'],
['nine', 'Nine Inch Nails'],
['four', 'The Four Seasons'],
[41, 'Sum 41'],
[41, 'Sum 41']]
const bandMap = new Map(bandData);
bandMap.set(182, 'Blink 182').set('twenty', 'Matchbox Twenty')
bandMap.delete(41)
console.log(bandMap);
console.log(bandMap.has(3))
console.log([...bandMap.keys()])


for (let [key, value] of bandMap) {
    console.log(`${key}: ${value}`);
}
console.log(bandMap.has(2))

bandMap.clear();

console.log(bandMap)
