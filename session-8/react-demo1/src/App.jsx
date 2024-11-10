// f(g(h(x)))

import { useState } from "react";

// import { Component } from "react";
// import HelloWorld, { Add } from "./components/HelloWorld";

// class HelloWorld2 extends Component {
//   render() {
//     return <h1>Hi there from class component</h1>;
//   }
// }

// const Card = ({ age, name }) => {
//   return (
//     <div>
//       <p>Inside the card</p>
//       <p>My Name is {name}</p>
//       <p>My Age is {age}</p>
//     </div>
//   );
// };

const StudentInfo = ({ name, age }) => {
  return (
    <div>
      {name == "Alex" && <h1>This is {name}</h1>}
      <p>Name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};

const UseStateComp = () => {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>Counter value is: {counter}</p>
      <button onClick={add}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Sub</button>
    </div>
  );
};

function App() {
  // const user = {
  //   name: "Alex",
  //   age: 19,
  // };
  const students = [
    { id: 1, name: "Alex", age: "15" },
    { id: 2, name: "John", age: "15" },
    { id: 3, name: "Meena", age: "15" },
  ];
  return (
    <div>
      {/* <h1 className="">{1 + 2}</h1>
      <h2>
        {user.name} {Add()}
      </h2>
      <HelloWorld />
      <HelloWorld />
      <HelloWorld2></HelloWorld2>
      <Card age={user.age} name={user.name}></Card> */}

      {students.map((student, index) => (
        <StudentInfo
          key={index}
          name={student.name}
          age={student.age}
        ></StudentInfo>
      ))}
      <UseStateComp />
    </div>
  );
}

export default App;

// 1. it should only one root element in a component
// 2. all the tags should be closed .
// 3. camelCase notation to write properties (props)
// 4. we use ClassName instead of class
// 5. expression will be eval under the {}
