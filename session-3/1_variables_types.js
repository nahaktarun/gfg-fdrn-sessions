// console.log("Tarun");
// console.log("Tarun");
// console.log("Tarun");
// console.log("Tarun");
// console.log("Tarun");
// console.log("Tarun");

// Variable -> to store value in memory we can reuse later.
// var name = "Tarun";
// var -> keyword
// keyword -> reserved words in a programming language.

//  What kind of value we can store in a variable
// Datatypes -> are the types of values that you can store within the variable.

// 1. Primitive type(primary datatypes) - Atomic in nature
// a. string -> anything which is enclosed in "" (double quotes) is called as string value
var name = "Tarun";
// b. number -> any positive any negative values, (integer)
console.log(name);

var age = 12;
console.log(typeof age);

// 3.bool -> 2 ; true or false
var isPassed = true;
console.log(isPassed);

// 4. Undefined -> value is unavailable at the moment but later variable can have the value.
var name2;
console.log(typeof name2, name2);

// 5. null -> null is value.
var isEmpty = null;
console.log(typeof isEmpty, isEmpty);

// II. Reference type: when we try to access a value with location or address where it's stored.
// a. list/array : a collection value stored in single variable. [values,value]
//           0  1  2  3  4
var score = [1, 2, 3, 4, 5];
console.log(score, typeof score);
// how to access individual values from list
// index  -> starts from 0 .... length of list - 1
console.log(score[1], typeof score[1]);
// parent -> object -> list/Array
// b. object (dictionary, hashmap)
// they're always in the form of key:value
object1 = { "name of": 2, 3: 5, 6: 8 };
console.log(typeof object1, object1);
// accessing the value in object
console.log(object1[1], typeof object1[1])
console.log(object1["name of"], typeof object1.name)




