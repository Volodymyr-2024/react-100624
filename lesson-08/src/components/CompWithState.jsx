import { useState } from "react";

export default function CompWithState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Component with state</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
