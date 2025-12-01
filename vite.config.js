import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 3000, // Change this to your desired port
        historyApiFallback: true, // Enable SPA routing for direct URL access
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ["react", "react-dom", "react-router-dom"],
                    utils: ["marked", "gray-matter"],
                },
            },
        },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    scripts: {
        dev: "vite --host",
    },
});
