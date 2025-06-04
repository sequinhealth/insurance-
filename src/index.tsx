import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ActualcareCa } from "./screens/ActualcareCa/ActualcareCa";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ActualcareCa />
  </StrictMode>,
);
