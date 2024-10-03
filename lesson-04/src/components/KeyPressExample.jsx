import { useState } from "react";

export default function KeyPressExample() {
  const [position, setPosition] = useState({ top: 100, left: 100 });

  const handleKeyDown = (e) => {
    e.preventDefault();
    const { top, left } = position;
    if (e.key === "ArrowUp") setPosition({ top: top - 10, left });
    if (e.key === "ArrowDown") setPosition({ top: top + 10, left });
    if (e.key === "ArrowLeft") setPosition({ top, left: left - 10 });
    if (e.key === "ArrowRight") setPosition({ top, left: left + 10 });
  };

  return (
    <div>
      <h2>События клавиатуры</h2>
      <div
        tabIndex="0"
        onKeyDown={handleKeyDown}
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: "50px",
          height: "50px",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
}
