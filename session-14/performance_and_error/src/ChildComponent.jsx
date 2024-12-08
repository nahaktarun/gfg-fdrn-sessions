import React from "react";
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("Rendered");
  return <button onClick={onIncrement}>Increase</button>;
});

export default ChildComponent;
