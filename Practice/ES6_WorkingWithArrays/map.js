let numbers = [1, 2, 3];
const squares = numbers.map(function (num) {
  return num ** 2;
});
console.log(squares);

const doubles = numbers.map(function (num) {
  console.log(num * 2);
});
console.log(doubles);
//doesn't work because there is no return value

const todos = [
  {
    id: 1,
    text: "Walk the dog",
    priority: "high",
  },
  {
    id: 2,
    text: "Walk the chickens",
    priority: "medium",
  },
  {
    id: 3,
    text: "Feed the cats",
    priority: "low",
  },
  {
    id: 4,
    text: "Put out the fire in my garage",
    priority: "high",
  },
];

const todotext = todos.map(function (todo) {
  return todo.text;
});

console.log(todotext);

//WRITING MAP
function myMap (arr, callback){
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }
    return newArray;
}

myMap(todos, function(todo){
    console.log( 'Task: ', todo.text, ', Priority: ', todo.priority);
});