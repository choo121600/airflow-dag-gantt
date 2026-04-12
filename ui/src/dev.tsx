import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PluginComponent from "./main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PluginComponent />
  </StrictMode>
);
