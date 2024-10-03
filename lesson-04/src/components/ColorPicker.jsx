import { useState } from "react";
import ColorInput from "./ColorInput";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  return (
    <div
      style={{
        backgroundColor: color,
        width: "300px",
        height: "300px",
        border: "1px solid black",
      }}
    >
      <ColorInput updateColor={setColor} />
    </div>
  );
}
