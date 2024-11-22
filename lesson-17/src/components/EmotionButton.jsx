/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const buttonStyle = css`
  background-color: purple;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
`;

export default function EmotionButton({ children }) {
  return <button css={buttonStyle}>{children}</button>;
}
