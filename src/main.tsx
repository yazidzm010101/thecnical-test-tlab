import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="thecnical-test-tlab">
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
