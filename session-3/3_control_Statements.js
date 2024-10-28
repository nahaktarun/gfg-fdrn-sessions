// what is flow control statement?
// 1. conditional flow statement
// It changes the flow of execution of code based on condition.
// 1. if statement
// 2. if-else statement
// 3. if ,else if , else
// 4. switch case
// 2. Iterative flow control statement
// a. for loop
// b. while loop
// c. do while loop

// 1.1. If statement
var age = 12;
// if (condition){
// statement1
// statement2
// }
// if (age <= 10) {
//   console.log("Young");
// }
// console.log("Adult");

// 1.2 if-else statement

// if (age < 10) {
//   console.log("Young");
// } else {
//   console.log("Adult");
// }

// 1.3 if-else if-else statement - check more then 2 condition

if (age < 14) {
  console.log("Young");
} else if (age < 13) {
  console.log("Young Boy/girl");
} else if (age > 14 && age < 21) {
  console.log("Adult");
} else if (age > 22 && age < 28) {
  console.log("Blah blah");
} else {
  console.log("Senior");
}

// 1.4 Switch case
var day = "tuesday";
switch (day) {
  case "Monday":
    console.log("Today is monday");
    break;
  case "Tuesday":
    console.log("Tuesday.. today");
    break;
  default:
    console.log("day is invalid");
}

// II. Iterative statement.
// 1. Intilisation
// 2. Condition check
// 3. Increment/decrement

// a. For loop
// i++ => i = i + 1 (post increment)
// ++i -> i = i (pre increment)
// i + 1
// i-- , --i
for (var i = 1; i <= 5; ++i) {
  console.log(i);
}
console.log("test");

// b. while loop
var i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// c. do while loop
// 1. init
// 2. increment/decrement
// 3. condition

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
