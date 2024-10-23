import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Authcontextprovider } from "./Context/Authcontext.jsx";
import { SocketContextProvider } from "./Context/SocketContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Authcontextprovider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </Authcontextprovider>
    </BrowserRouter>
  </StrictMode>
);
