// Take the commented ES5 syntax and convert it to ES6 arrow Syntax
// Open PR

let myFunction =  () => {};

const anotherFunction = phrase => param;

const add = function (param1, param2) {return param1 + param2};
add(1,2);

const subtract = (param1, param2) => {return param1 - param2};
subtract(1,2) 

exampleArray = [1,2,3,4];

const triple = exampleArray.map(num => num * 3);
console.log(triple);