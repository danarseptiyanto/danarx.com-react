// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import App from "./App";
import ComponentName from "./Pages/CV";
import "./index.css";

// ✅ Define your routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />, // Layout wrapper
        children: [
            { index: true, element: <App /> }, // same as path="/"
            { path: "cv", element: <ComponentName /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* ✅ Use RouterProvider instead of BrowserRouter */}
        <RouterProvider router={router} />
    </React.StrictMode>,
);
