import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Счетчик кликов</h2>
      <p>Вы нажали {count} раз(а)</p>
      <button onClick={handleClick}>Ну кликай, чё</button>
      <a
        onClick={(event) => {
          console.log(event);
          event.preventDefault();
        }}
        href="https://google.com"
      >
        Link
      </a>
    </div>
  );
}

export default ClickCounter;
