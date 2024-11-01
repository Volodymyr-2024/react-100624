import { useState, useRef, useEffect } from "react";

export default function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);
  const firstNameInputRef = useRef(null);
  const testRef = useRef(5);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  useEffect(() => {
    if (firstNameInputRef.current !== null) {
      firstNameInputRef.current.focus();
    }

    const keyEvent = window.addEventListener("keydown", (event) => {
      if (event.key === "f") {
        firstNameInputRef.current.focus();
      }
    });

    return () => {
      window.removeEventListener("keydown", keyEvent);
    };
  }, []);

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {clickCount}</p>
      <button onClick={handleClick}>+</button>
      <label>
        First Name
        <input ref={firstNameInputRef} type="text" />
      </label>
      <label>
        Last Name
        <input type="text" />
      </label>
    </div>
  );
}
