import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "react-auth-kit";

AOS.init();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authType={"localstorage"}
        authName={"_auth"}
        // cookieDomain={window.location.hostname}
        // cookieSecure={window.location.protocol === "https:"}
      >
        <App />{" "}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
