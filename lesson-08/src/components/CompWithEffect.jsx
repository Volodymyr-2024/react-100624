import { useState, useEffect } from "react";

export default function CompWithEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      document.title = "React App";
    };
  }, [count]);

  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Component with effect</p>
      <p>You clicked {count} times</p>
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}
