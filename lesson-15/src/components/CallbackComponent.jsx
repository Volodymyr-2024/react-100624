import { memo } from "react";

function CallbackComponent({ func }) {
  console.log("Rendering <CallbackComponent />");

  return (
    <div>
      <h1>CallbackComponent</h1>
      <button
        onClick={() => {
          func();
        }}
      >
        Execute func
      </button>
    </div>
  );
}

export default memo(CallbackComponent);
