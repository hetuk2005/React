// 1. Build a counter where the document title updates with the counter value.

import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={handleIncrement}>+</button>
      <button
        onClick={handleDecrement}
        style={{ marginLeft: "15px" }}
        disabled={count == 0}
      >
        -
      </button>
    </div>
  );
};
