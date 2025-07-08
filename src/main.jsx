import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToolBar from "./views/ToolBar/ToolBar.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToolBar />
  </StrictMode>
);
