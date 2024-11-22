/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useState } from "react";

function buttonStyle(isActive) {
  return css`
    background-color: ${isActive ? "purple" : "gray"};
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
  `;
}

export default function EmotionToggleButton({ children }) {
  const [isActive, setIsActive] = useState(true);

  return (
    <button
      css={buttonStyle(isActive)}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      {children}
    </button>
  );
}
