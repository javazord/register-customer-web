import "./index.css";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ServiceStatusProvider } from "./hooks/useServiceStatus";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ServiceStatusProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServiceStatusProvider>
);
