import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import React from "react";

export default function NotFound() {
    return (
        <>
            <SEO
                title="404 - Page Not Found"
                description="The page you're looking for doesn't exist. Return to Danar Septiyanto's portfolio homepage or explore other sections."
            />
            <div className="bg-bg-secondary border-line flex min-h-screen items-center justify-center border-b px-5">
                <div className="text-center">
                    {/* 404 Number with gradient effect */}
                    <div className="relative mb-8">
                        <h1 className="text-accent-primary text-[120px] leading-none font-bold md:text-[180px]">
                            404
                        </h1>
                        <div className="bg-accent-primary/10 absolute inset-0 -z-10 blur-3xl"></div>
                    </div>

                    {/* Error message */}
                    <h2 className="text-text-primary mb-4 text-2xl font-bold md:text-4xl">
                        Page Not Found
                    </h2>
                    <p className="text-text-secondary mb-8 max-w-md text-base md:text-lg">
                        Oops! The page you're looking for doesn't exist. It
                        might have been moved or deleted.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            to="/"
                            className="bg-accent-primary hover:bg-accent-primary/80 group flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all"
                        >
                            <svg
                                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"></path>
                            </svg>
                            Back to Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="border-line text-text-primary hover:bg-accent-secondary flex items-center gap-2 border px-6 py-3 font-semibold transition-all"
                        >
                            Go Back
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="mt-16 flex items-center justify-center gap-8 opacity-50">
                        <div className="bg-line h-px w-16"></div>
                        <svg
                            className="text-text-secondary h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
                        </svg>
                        <div className="bg-line h-px w-16"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
