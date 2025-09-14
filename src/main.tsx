import React from "react";
import ReactDOM from "react-dom/client"; // ✅ make sure ReactDOM imported
import { RouterProvider } from "react-router-dom";
import "./index.css";
import "../src/App.css";
import { router } from "./Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
