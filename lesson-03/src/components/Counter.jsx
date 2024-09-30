import { useState } from "react";
import CountDisplay from "./CountDisplay";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(0);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Счётчик</h2>
      <CountDisplay count={count} />
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
