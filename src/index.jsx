import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CommonContextProvider from "context/CommonContext";
import ActiveContextProvider from "context/ActiveContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CommonContextProvider>
    <ActiveContextProvider>
      <App />
    </ActiveContextProvider>
  </CommonContextProvider>
);
