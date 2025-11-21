import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="text-text-primary hover:bg-accent-primary/20 border-line hover:text-accent-primary relative flex aspect-square h-full cursor-pointer items-center justify-center border-l px-7 transition-colors md:aspect-auto"
            aria-label="Toggle theme"
        >
            {/* Sun icon for light mode */}
            <svg
                className={`absolute h-5 w-5 transition-all duration-300 ${
                    theme === "light"
                        ? "scale-100 rotate-0 opacity-100"
                        : "scale-0 rotate-90 opacity-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>

            {/* Moon icon for dark mode */}
            <svg
                className={`absolute h-5 w-5 transition-all duration-300 ${
                    theme === "dark"
                        ? "scale-100 rotate-0 opacity-100"
                        : "scale-0 -rotate-90 opacity-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
        </button>
    );
}
