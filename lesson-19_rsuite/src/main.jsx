import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CustomProvider } from "rsuite";
import "./index.css";
import App from "./App.jsx";
import "rsuite/dist/rsuite.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomProvider theme="light">
      <App />
    </CustomProvider>
  </StrictMode>
);
