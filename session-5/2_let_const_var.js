// Variable declaration
// 1. var
// Scope -> function-scoped/global scoped variable
// re-declaration ->  declare the variable again
// re-assignment -> re assign the value
// 2. let
// scope -> blocked scope {},
// re-declaration -> not possible
// re-assignment -> reassignment also possible
// 3. const
// scope -> blocked scope
// re-declaration -> not possible
// re-assignment -> not possible

function scopes() {
  const constant = "This cannot be reassigned";
  let blockedScoped = "This is blocked Scoped";
  if (true) {
    var variableInBlock = "This is blocked variable";
    let blockVariable = "This is blocked variable";
    // console.log(functionScoped);
    console.log(blockedScoped);
    console.log(variableInBlock);
    console.log(blockVariable);
    console.log(constant);
  }
  blockedScoped = "newvalue";
  console.log(blockedScoped);
  //   const constant = "new value";
  //   console.log(constant);
}

// console.log(functionScoped, "outside");
// console.log(blockedScoped);
// console.log(constant);
// scopes();

// III. Hoisting -> when we move the declaration to the top level of our code.
// var hoistedVariable; // var variables
// console.log(hoistedVariable); // hoisting applicable for only declaration of variable not init.
// hoistedVariable = 10;
// console.log(hoistedVariable);
// let letVariable;
// console.log(letVariable);

// // const const2 ;
// const const3 = "hi there"; // declare + init is mandatory.

// hoistedFunc();
// function hoistedFunc() {
//   console.log("Hoisted Function");
// }
// // notHoisted(); // not found
// var notHoisted = function () {
//   console.log("Hi there");
// };
// console.log(typeof notHoisted);
// Why functions are called as first class citizen in javascript?
// we can return a function from a function, we can take function as input to a function.

// IV Closure: Closures allow function to access variables from a outer function even after the outer function  has returned.

function outerFunction() {
  let y = 10;
  return function innerFunction(z) {
    return y + z;
  };
}

const result = outerFunction();
// console.log(outerFunction())
console.log(result(4));

// Function expression
var addition = function add() {
  return 0;
};

// V HOF (higher order function): we can return a function from a function, we can take function as input to a function.

function operationToArray(arr, operation) {
  // .map() => it takes each and every element from array and apply the operation to each element
  // method : functions which are associated with any specific datatypes.

  return arr.map(operation);
}

// arr => [1,2,3,4,5]
// operation -> function -> double, square, cube , power.....

const double = function (x) {
  return x * 2;
};

const square = function (x) {
  return x * x;
};

let numbers = [1, 2, 3, 4, 5];
console.log(operationToArray(numbers, double));
console.log(operationToArray(numbers, square));

// IIFA -> Immediate invoking Function ..
const square2 = (function (x) {
  console.log(x * x);
  return x * x;
})(12);

console.log(square2); // not able to call since the function expression already invoked.with value.
