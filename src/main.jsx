import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import RootLayout from "./layouts/RootLayout";
import App from "./App";
import CV from "./Pages/CV";
import { Contact, ContactSuccess } from "./Pages/Contact";
import BlogList from "./Pages/BlogList";
import BlogPost from "./Pages/BlogPost";
import BelajarEraDigital from "./Pages/Projects/BelajarEraDigital";
import NotFound from "./Pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeProvider";

import "./index.css";
import Bedlink from "./Pages/Projects/Bedlink";
import SuratBinusa from "./Pages/Projects/SuratBinusa";
import TicyKit from "./Pages/Projects/TicyKit";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <App /> },
            { path: "blog", element: <BlogList /> },
            { path: "contact", element: <Contact /> },
            { path: "contact-success", element: <ContactSuccess /> },
            { path: "blog/:slug", element: <BlogPost /> },
            {
                path: "project/belajar-era-digital",
                element: <BelajarEraDigital />,
            },
            {
                path: "project/bedlink-id",
                element: <Bedlink />,
            },
            {
                path: "project/surat-binusa",
                element: <SuratBinusa />,
            },
            {
                path: "project/ticykit",
                element: <TicyKit />,
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
        <HelmetProvider>
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </HelmetProvider>
    </React.StrictMode>,
);
