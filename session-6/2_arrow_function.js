// Arrow function := one liner code. but multiple line is also possible
// 2. It does not have any name / invisible function it doesnot have any name attached in function declaration.
// 3. we donot need the return while writing in a single line.

// I function expression
const double1 = function (x) {
  return 2 * x;
};
console.log(double1(2));

// II arrow function - more concise less line of code for simple function.
const double2 = (x) => x * 2;
const double3 = (x) => {
  return x * 2;
};
const greet = () => console.log("Hi there");

// II. Arrow function with object literals
const profile = (name, age) => {
  return { Name: name, Age: age };
};
const profile2 = () => {
  return { getName: (name) => console.log(name) };
};

console.log(double2(2));
console.log(double3(2));
console.log(greet());
console.log(profile("Alex", 29));
console.log(profile2.getName);
const val = profile2();
console.log(val.getName("Alex"));

// III. 'this' binding in arrow function.

const object = {
  name: "Tom",
  generalFunc: function () {
    console.log("from general func", this.name);
  },
  arrowFunction: function () {
    setTimeout(() => {
      let name = "James";
      console.log(this.name, name); // "Object"
    }, 1000);
  },
};

object.generalFunc();
object.arrowFunction();
