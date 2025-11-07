import React from "react";
import { Link } from "react-router-dom";

const CV = () => {
    return (
        <>
            <Link to="/" className="text-red-500">
                back
            </Link>
            <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-white p-8 shadow-lg">
                {/* Header */}
                <div className="mb-8 flex flex-col items-center">
                    <div className="mb-4 h-24 w-24 rounded-full bg-gray-200" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        John Doe
                    </h1>
                    <p className="text-gray-500">Frontend Developer</p>
                    <div className="mt-2 flex space-x-4">
                        <span className="text-sm text-gray-400">
                            Email: johndoe@email.com
                        </span>
                        <span className="text-sm text-gray-400">
                            Phone: +123 456 7890
                        </span>
                    </div>
                </div>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700">
                        Profile
                    </h2>
                    <p className="text-gray-600">
                        Passionate frontend developer with experience in
                        building responsive web applications using React and
                        Tailwind CSS. Strong problem-solving skills and a keen
                        eye for design.
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700">
                        Experience
                    </h2>
                    <div className="mb-4">
                        <h3 className="font-bold text-gray-800">
                            Frontend Developer
                        </h3>
                        <span className="text-sm text-gray-500">
                            Awesome Company &middot; 2021 - Present
                        </span>
                        <ul className="mt-2 list-inside list-disc text-gray-600">
                            <li>
                                Developed and maintained web applications using
                                React and Tailwind CSS.
                            </li>
                            <li>
                                Collaborated with designers and backend
                                developers to deliver high-quality products.
                            </li>
                            <li>
                                Optimized applications for maximum speed and
                                scalability.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800">
                            Web Developer Intern
                        </h3>
                        <span className="text-sm text-gray-500">
                            Tech Startup &middot; 2020 - 2021
                        </span>
                        <ul className="mt-2 list-inside list-disc text-gray-600">
                            <li>
                                Assisted in building landing pages and UI
                                components.
                            </li>
                            <li>
                                Participated in code reviews and team meetings.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700">
                        Education
                    </h2>
                    <div>
                        <h3 className="font-bold text-gray-800">
                            B.Sc. in Computer Science
                        </h3>
                        <span className="text-sm text-gray-500">
                            University of Example &middot; 2017 - 2021
                        </span>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="mb-2 text-xl font-semibold text-gray-700">
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            React
                        </span>
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Tailwind CSS
                        </span>
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            JavaScript
                        </span>
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            HTML
                        </span>
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            CSS
                        </span>
                        <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                            Git
                        </span>
                    </div>
                </section>
                <Link to="/" className="text-red-500">
                    back
                </Link>
                {/* Languages */}
                <section>
                    <h2 className="mb-2 text-xl font-semibold text-gray-700">
                        Languages
                    </h2>
                    <ul className="list-inside list-disc text-gray-600">
                        <li>English (Fluent)</li>
                        <li>Spanish (Intermediate)</li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default CV;
