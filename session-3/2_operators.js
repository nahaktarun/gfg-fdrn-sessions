// Operator  -> Character which we use to perform operation on Operands

// 1. uniary -> which requires single operands

// 2. Binary -> two operands
// 1. Arithmetic operator.
//  +, - , * , / , %, **
x = 10;
y = "10";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y); // returns the remainder
console.log(x ** y); // x is base y is the raise

// 2. relational operators
// relational operators always returns bool value as result.
console.log("*******************");
// < , > , <= ,>= , == (only value), === (type+value) strict checking ,!= ,!==

// console.log(x > y)
// console.log(x < y)
// console.log(x >= y)
// console.log(x <= y)
console.log(x == y);
console.log(x != y);
console.log(x === y);
console.log(x !== y);

console.log("******************");
// 3. Logical operators
//  && (and) , ||(or) , !(not)
// it can be applied between bool values
// && (*) truthy = 1....100, string.... falsy = 0,null, undefined
// || (+) 
console.log(true && false);
console.log(false && false);
console.log(true && true);
console.log(false && true);
console.log("*****************");
console.log(true || false);
console.log(false || false);
console.log(true || true);
console.log(false || true);

console.log(!true)
console.log(!false)
