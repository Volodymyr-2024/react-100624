import { useState } from "react";

export default function ColorInput({ updateColor }) {
  const [tempColor, setTempColor] = useState("#ffffff");

  function handleChange(e) {
    setTempColor(e.target.value);
  }

  function handleUpdateColor() {
    updateColor(tempColor);
  }

  return (
    <div>
      <input type="color" value={tempColor} onChange={handleChange} />
      <button onClick={handleUpdateColor}>Изменить цвет</button>
    </div>
  );
}
