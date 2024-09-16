function holler(name) {
  console.log(`HEY ${name}`);
}

const whisper = (name) => {
  console.log(`hey, I know a secret`);
};

holler("World");

whisper();

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const mathFuncs = [add, subtract, multiply, divide];

//console.log(mathFuncs)

setTimeout(whisper, 2000);

const doMath = (x, y, mathFunc) => {
  return mathFunc(x,y)
}

console.log(doMath(3,4, add))

doMath(3, 4, function(x, y) {
  console.log(x**y)
});

function doAllMath(x,y,mathFuncs) {
  for (let func of mathFuncs) {
    console.log(func(x, y))
  
}}

doAllMath(4, 8, mathFuncs)