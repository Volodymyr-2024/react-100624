import React, { useState } from "react";

function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const div = document.getElementById("mouse-tracker");
    const rect = div.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setPosition({ x, y });
  };

  return (
    <div>
      <h2>Трекер мышки</h2>
      <p>
        Позиция мышки: {position.x}, {position.y}
      </p>
      <div
        id="mouse-tracker"
        style={{ height: "200px", border: "1px solid white" }}
        onMouseMove={handleMouseMove}
      ></div>
    </div>
  );
}

export default MouseTracker;
