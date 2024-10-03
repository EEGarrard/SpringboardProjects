const string = '.'
console.log(string.padStart(10, 'hi'))
console.log(string.padStart(12, 'JavaScript Mastery'))
console.log(string.padEnd(12, 'JavaScript Mastery'))

const object = {
    name: 'John Doe',
    age: 30,
    favoriteBooks: ['HP1', 'HP2']
}

console.log(Object.values(object))
console.log(Object.entries(object))

console.log(Math.pow(2,3))

const array = [1, 2, 5, 4, ,]
console.log(array)

console.log(array.toSorted())

console.log(array.toReversed())
console.log(array.toSpliced())
array[2] = 'b'
const b = array.with(2, 'a')
console.log(b)

const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 30},
    {name: 'David', age: 32}
]

Object.groupBy(people, person => {
    return person.age
})