import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import App from "./App";
import CV from "./pages/CV";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import BelajarEraDigital from "./pages/projects/BelajarEraDigital";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeProvider";

import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <App /> },
            { path: "blog", element: <BlogList /> },
            { path: "blog/:slug", element: <BlogPost /> },
            {
                path: "project/belajar-era-digital",
                element: <BelajarEraDigital />,
            },
            { path: "*", element: <NotFound /> },
        ],
    },
    {
        path: "/cv",
        element: <CV />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>,
);
