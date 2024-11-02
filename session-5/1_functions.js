// var name = "Alex";
// console.log("Hi", name);
// name = "Peter";
// console.log("Hi", name);

// 1. function declaration

// function <nameoffunction>(){}
function greet(name) {
  console.log("Hi", name);
}
// () -> to hold the parameter
// {} => multiple line of code which belongs to same function to hold those multiple line of code we use {}
// input -> function(input) -> output

// 2. function calling/invoking.
// using the name of function with values passed in ()
// greet("Alex");
// greet("Peter");

// Parameter -> name `variable which is used in function declaration`
// Argument -> are the value which is getting passed during the time of invoking of function.

// II Returning from the function.

function add(num1, num2) {
  return num1 + num2;
  console.log("hi there");
}

result = add(1, 2);
console.log(result);
