import { useState, useEffect } from "react";

export default function SimpleComponent() {
  // Отслеживается, Реакт знает, что переменная number изменилась
  const [number, setNumber] = useState(1);

  // Не отслеживается, Реакт не знает, что переменная count изменилась
  let count = 0;

  useEffect(() => {
    console.log("Я обновился");
  });

  return (
    <div>
      <p
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        I'm a Simple Component - {number}
      </p>
      <button
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Change count - {count}
      </button>
    </div>
  );
}
