const Person = {
  name: "Alice",
  age: 12,
  pinCode: 510101,
  address: {
    city: "Zyz",
    Town: "abc",
  },
  score: [1, 2, 3],
};

console.log(Object.keys(Person));
console.log(Object.values(Person));
// console.log(Person.keys());
console.log(Object.entries(Person));

// 2. Assign method
target = { a: 1, b: 2 };
source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log(result); //
console.log(target);
console.log(source);

// 3. Spread operator with object
const updatedPerson = { ...Person, marks: 100 };
console.log(updatedPerson);
