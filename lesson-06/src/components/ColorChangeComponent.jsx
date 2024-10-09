import { useState, useEffect } from "react";

export default function ColorChangeComponent() {
  const [color, setColor] = useState("");

  // Выполняется при первом рендере и при каждом обновлении color
  useEffect(() => {
    console.log("Цвет обновился на ", color);
    document.body.style.backgroundColor = color;
    document.title = color;
  }, [color]);

  // Выполняется при каждом обновлении
  useEffect(() => {
    console.log("Я обновился");
  });

  // Выполняется при первом рендере
  useEffect(() => {
    console.log("Я отрисовался");
  }, []);

  return (
    <input
      type="color"
      value={color}
      onChange={(e) => {
        setColor(e.target.value);
      }}
    />
  );
}
