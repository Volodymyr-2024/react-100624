import { useState } from "react";

const list = [50, 10, 25, 75, 200];

export default function ClickList() {
  const [sum, setSum] = useState(0);

  function addToSum(value) {
    setSum(sum + value);
  }

  return (
    <div>
      <h2>Список</h2>
      <p>Сумма: {sum}</p>
      <ul>
        {list.map((item, index) => (
          <li onClick={() => addToSum(item)} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
