import { useState, useEffect } from "react";

export default function Interval() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
      console.log("Сработал интревал");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    function clickHandler() {
      console.log("Кликнули");
    }

    document.body.addEventListener("click", clickHandler);

    return () => {
      document.body.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <div>
      Interval: {number}
      <input />
    </div>
  );
}
