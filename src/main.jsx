import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./views/Navbar/Navbar.jsx";
import "./index.css";
import Home from "./views/Home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
  </StrictMode>
);
