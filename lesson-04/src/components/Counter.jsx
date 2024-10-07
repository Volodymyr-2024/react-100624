import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick(event) {
    console.log("Клик на div");
    if (event.target.tagName !== "BUTTON") {
      return;
    }

    const { operator, number } = event.target.dataset;

    let newCount = count;
    if (operator === "+") {
      newCount += parseInt(number);
    } else if (operator === "-") {
      newCount -= parseInt(number);
    }
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  }

  return (
    <div onClick={handleClick}>
      <h2 id="counter-h2">Делегированный счетчик</h2>
      <p
        onClick={() => {
          console.log("P clicked");
        }}
      >
        {count}
      </p>
      <button
        onClick={() => {
          console.log("Клик на кнопку +1");
        }}
        data-operator="+"
        data-number="1"
      >
        +1
      </button>
      <button data-operator="+" data-number="5">
        +5
      </button>
      <button data-operator="+" data-number="50">
        +50
      </button>
      <button data-operator="-" data-number="1">
        -1
      </button>
      <button data-operator="-" data-number="5">
        -5
      </button>
      <button data-operator="-" data-number="50">
        -50
      </button>
      <button
        data-operator="+"
        data-number="9999"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        +9999
      </button>
    </div>
  );
}
