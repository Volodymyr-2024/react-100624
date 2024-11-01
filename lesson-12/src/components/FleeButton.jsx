import { useRef } from "react";

export default function FleeButton() {
  const buttonRef = useRef(null);

  function handleMouseMove() {
    const button = buttonRef.current;

    if (button) {
      const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
      const randomY =
        Math.random() * (window.innerHeight - button.offsetHeight);

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }
  }

  return (
    <button
      ref={buttonRef}
      style={{
        position: "absolute",
        transition: "all 2s ease",
      }}
      onMouseMove={handleMouseMove}
    >
      Click me
    </button>
  );
}
