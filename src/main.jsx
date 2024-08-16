import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import { PrivyProvider } from "@privy-io/react-auth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <PrivyProvider
    appId="clz5th2t100r3sbdu44h7zzn6"
    config={{
      appearance: {
        theme: "dark",
      },
    }}
  >
    <Router>
     
        <App />
    </Router>
  </PrivyProvider>,
);