const banned = new Set(["nofilter", 'justsaying', 'winning', 'yolo']);
console.log(banned);
const helloGoodbye = new Set('hello', 'goodbye');
console.log(helloGoodbye);
console.log(banned.has('yolo'))

function bannedFilter(tags) {
    const banned = new Set(["nofilter", 'justsaying', 'winning', 'yolo']);
    return [...tags].filter((tag) => !banned.has(tag)) 
}

const erinsTags = new Set(['happyMonday', 'yolo', 'winning', 'sunset'])

console.log(bannedFilter(erinsTags));

const ages = [45, 45, 23, 14, 12, 12, 56]
new Set(ages);

console.log(new Set(ages)); // { 45, 23, 14, 12, 56 }