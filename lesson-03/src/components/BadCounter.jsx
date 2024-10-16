import { useState } from "react";
import CountDisplay from "./CountDisplay";

export default function BadCounter() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  function directWithDelay() {
    setTimeout(() => {
      setCount(count + 1);
    }, 1500);
  }

  function relatedWithDelay() {
    setTimeout(() => {
      setCount((oldCount) => {
        return oldCount + 1;
      });
    }, 1500);
  }

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i !== item));
  }

  return (
    <div>
      <h2>Счётчик</h2>
      <CountDisplay count={count} />
      <button onClick={directWithDelay}>Прямое обновление</button>
      <button onClick={relatedWithDelay}>Обновление на основании</button>
    </div>
  );
}
