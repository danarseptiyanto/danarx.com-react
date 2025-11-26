import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@imagekit/react";

// Projects data array - add your projects here
const projectsData = [
    {
        thumbnail: "belajareradigital.png",
        title: "Belajar Era Digital",
        slug: "belajar-era-digital",
    },
    {
        thumbnail: "bedlink-id.png",
        title: "Bedlink",
        slug: "bedlink-id",
    },
    {
        thumbnail: "surat-binusa.png",
        title: "Surat Binusa",
        slug: "surat-binusa",
    },
    {
        thumbnail: "ticykit.png",
        title: "TicyKit",
        slug: "ticykit",
    },
];

// ProjectCard component
function ProjectCard({ thumbnail, title, slug }) {
    return (
        <Link
            to={`/project/${slug}`}
            className="group relative block overflow-hidden"
        >
            <Image
                urlEndpoint="https://ik.imagekit.io/dnrx/danarx/thumbnail-project/"
                src={thumbnail}
                className="bg-line aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[101%]"
            />
            <div className="from-accent-primary absolute right-0 bottom-0 left-0 bg-linear-to-tr via-transparent to-transparent px-2 pt-8 pb-2 md:hidden">
                <p className="text-sm font-semibold text-white md:text-xl">
                    {title}
                </p>
            </div>
            <div className="hover:bg-accent-primary/70 absolute inset-0 hidden items-center justify-center transition-all duration-500 md:flex">
                <p className="inline-flex translate-y-4 items-center gap-1 text-lg font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {title}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                        <circle cx="12" cy="12" r="1" />
                        <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
                    </svg>
                </p>
            </div>
        </Link>
    );
}

export default function Projects() {
    return (
        <div
            id="projects"
            className="border-b-line mx-auto scroll-mt-[65px] border-b"
        >
            <div className="border-x-line mx-0 border-x-0 px-5 py-7 md:mx-10 md:border-x md:px-9 md:py-9">
                <p className="text-text-primary text-xl font-semibold md:text-[32px]">
                    Projects
                </p>
                <div className="mt-5 grid grid-cols-1 gap-5 pb-3 md:grid-cols-2 md:gap-6">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            thumbnail={project.thumbnail}
                            title={project.title}
                            slug={project.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
