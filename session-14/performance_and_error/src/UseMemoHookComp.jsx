// what is useMemo() -> hook useEffect callback -> dep array
// Performance enhancement: useMemo()
// memo -> memoisation -> cache them

import { useState, useMemo } from "react";

function UseMemoHookComp() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>selectedItem: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
const initialItems = new Array(29_999_99).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_98,
  };
});

export default UseMemoHookComp;
