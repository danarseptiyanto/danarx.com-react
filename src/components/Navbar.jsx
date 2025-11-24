import { Link } from "react-router-dom";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="border-b-line bg-bg-secondary/80 fixed top-0 z-50 mx-auto flex h-[65px] w-full items-center border-b backdrop-blur-xl">
                <div className="border-x-line mx-0 flex h-full w-full items-center justify-between border-x-0 pl-5 md:mx-10 md:border-x md:pl-9">
                    <Link
                        to="/"
                        className="bg-accent-primary flex aspect-square h-fit w-[41px] items-center justify-center"
                    >
                        <svg
                            className="fill-white"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.4724 0C15.4262 0 18.1366 1.00514 20.2748 2.68566L18.664 6.0626C17.0735 4.5251 14.8866 3.57955 12.4765 3.57955C7.60356 3.57955 3.65571 7.44516 3.65571 12.2166C3.65571 16.0107 6.15507 19.2327 9.6282 20.3927L8.26492 23.718C3.44879 22.0256 0 17.5164 0 12.2166C0 5.47064 5.58298 0.00397296 12.4724 0.00397296V0Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.8067 5.36734C24.1578 7.31802 24.949 9.6779 24.949 12.2126C24.949 18.9585 19.3661 24.4252 12.4766 24.4252C11.5028 24.4252 10.5534 24.3139 9.64453 24.1074L11.0281 20.7304C11.4988 20.8059 11.9816 20.8456 12.4766 20.8456C17.3495 20.8456 21.2974 16.98 21.2974 12.2086C21.2974 11.3942 21.1797 10.6036 20.9647 9.85668L22.8067 5.36337V5.36734Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.9194 19.6697L15.0814 24.155C14.5499 24.2663 14.0022 24.3457 13.4463 24.3855C13.4544 24.3855 13.4585 24.3855 13.4666 24.3855L15.0733 20.4643C15.7265 20.2696 16.3433 19.9994 16.9235 19.6697H16.9194Z"
                                fill="black"
                                fillOpacity="0.14902"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.05171 22.0295C4.65003 21.7356 4.26458 21.4217 3.89941 21.084L5.41282 17.3932C5.72524 17.8024 6.07418 18.1798 6.45152 18.5295L5.02331 22.0137L5.04766 22.0335L5.05171 22.0295Z"
                                fill="black"
                                fillOpacity="0.14902"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0139 9.84079L5.02734 22.0097C6.00518 22.7248 7.09256 23.3009 8.26515 23.7101L8.4883 23.1658L13.9536 9.84079H10.0179H10.0139ZM13.4627 24.3855L15.0694 20.4642L19.9383 8.58934L21.7844 4.08411L23.241 0.532364H19.354L19.3053 0.536337L18.8306 1.69641L17.447 5.07335L11.0282 20.7265L9.64466 24.1034C10.5535 24.31 11.4948 24.4173 12.4686 24.4212C12.5741 24.4212 12.6796 24.4212 12.7851 24.4173H12.8013C12.8987 24.4133 12.9961 24.4093 13.0934 24.4053L13.1381 24.4014C13.2273 24.3974 13.3125 24.3894 13.4018 24.3855C13.4221 24.3855 13.4424 24.3815 13.4627 24.3815V24.3855Z"
                            />
                        </svg>
                    </Link>
                    <div className="flex h-full items-center">
                        <div className="border-line hidden h-full items-center gap-7 border-r pr-7 md:flex">
                            <Link
                                to="/"
                                className="text-text-primary hover:text-accent-primary flex h-full items-center font-semibold transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/#projects"
                                className="text-text-primary hover:text-accent-primary flex h-full items-center font-semibold transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/#writings"
                                className="text-text-primary hover:text-accent-primary flex h-full items-center font-semibold transition-colors"
                            >
                                Writings
                            </Link>
                            <Link
                                to="/cv"
                                className="text-text-primary hover:text-accent-primary flex h-full items-center font-semibold transition-colors"
                            >
                                CV
                            </Link>
                        </div>
                        <ThemeToggle />
                        <Link
                            to="/contact"
                            className="text-text-primary hover:bg-accent-primary/80 bg-accent-primary border-line hidden h-full items-center border-l px-5 font-semibold transition-colors md:flex"
                        >
                            Contact
                        </Link>
                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="text-text-primary hover:bg-accent-primary/80 bg-accent-primary border-line hover:text-accent-primary relative flex aspect-square h-full cursor-pointer items-center justify-center border-l transition-colors md:hidden"
                            aria-label="Toggle mobile menu"
                        >
                            {/* Hamburger icon */}
                            <svg
                                className={`absolute h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
                            </svg>
                            {/* Close icon */}
                            <svg
                                className={`absolute h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 10.586L16.95 5.636L18.364 7.05L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.05 18.364L5.636 16.95L10.586 12L5.636 7.05L7.05 5.636L12 10.586Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? "pointer-events-auto opacity-100"
                        : "pointer-events-none opacity-0"
                }`}
            >
                {/* Backdrop */}
                <div
                    onClick={closeMobileMenu}
                    className="bg-bg-primary/60 absolute inset-0 backdrop-blur-sm"
                ></div>

                {/* Menu panel */}
                <div
                    className={`bg-bg-secondary border-l-line absolute top-[65px] right-0 h-[calc(100vh-65px)] w-full transform border-l shadow-2xl transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <nav className="flex h-full flex-col">
                        {/* Navigation links */}
                        <div className="flex flex-col">
                            <Link
                                to="/"
                                onClick={closeMobileMenu}
                                className="text-text-primary hover:bg-accent-secondary border-b-line flex items-center border-b px-8 py-6 text-lg font-semibold transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                to="/projects"
                                onClick={closeMobileMenu}
                                className="text-text-primary hover:bg-accent-secondary border-b-line flex items-center border-b px-8 py-6 text-lg font-semibold transition-colors"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/writings"
                                onClick={closeMobileMenu}
                                className="text-text-primary hover:bg-accent-secondary border-b-line flex items-center border-b px-8 py-6 text-lg font-semibold transition-colors"
                            >
                                Writings
                            </Link>
                        </div>

                        {/* Contact button at bottom */}
                        <div className="mt-auto p-8">
                            <Link
                                to="/contact"
                                onClick={closeMobileMenu}
                                className="bg-accent-primary hover:bg-accent-primary/80 flex w-full items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
