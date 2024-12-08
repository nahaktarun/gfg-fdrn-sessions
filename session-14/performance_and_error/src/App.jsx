import React, { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementValue = () => {
    setCount((prev) => prev + 1);
  };

  const incrementValueWithUseCall = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={incrementValueWithUseCall} />
    </div>
  );
}
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("Rendered");
  return <button onClick={onIncrement}>Increase</button>;
});
ChildComponent.displayName = "ChildComponent";
export default App;
