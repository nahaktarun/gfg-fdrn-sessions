// I Array destructing

const numbers = [1, 2, 3, 4, 5];
const [first, second, third, ...rest] = numbers;
console.log(first, second, third, rest);

const [first1, , third2] = numbers;
console.log(first1, third2);

// 2. Object  destructing
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

const {
  name,
  age,
  pinCode: pin,
  address: { city, Town },
  score: [score1],
} = Person;
console.log(name, pin, city, Town, score1);

const callPerson = ({ name, age }) => {
  console.log(name, age);
};

callPerson(Person);
