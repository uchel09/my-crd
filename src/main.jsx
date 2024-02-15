import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TransposeProvider } from "./context/TransposeContext.jsx";
import { ChordLyricProvider } from "./context/ChordLiricContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TransposeProvider>
        <ChordLyricProvider>
        <App />
        </ChordLyricProvider>
    </TransposeProvider>
  </React.StrictMode>
);
