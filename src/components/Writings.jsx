import React from "react";
import WritingCard from "./WritingCard";
import matter from "gray-matter";
import { Link } from "react-router-dom";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const posts = import.meta.glob("../blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

const blogPosts = Object.entries(posts)
    .map(([path, content]) => {
        const slug = path.split("/").pop().replace(".md", "");
        const { data } = matter(content);
        return {
            slug,
            title: data.title,
            thumbnail: data.thumbnail,
            date: data.date,
        };
    })
    .sort((a, b) => {
        // Extract number prefix before '-'
        const aNum = parseInt(a.slug.split("-")[0], 10);
        const bNum = parseInt(b.slug.split("-")[0], 10);

        // If both have number prefix, sort numerically (descending)
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return bNum - aNum;
        }

        // Fallback: reverse alphabetical if not numeric
        return b.slug.localeCompare(a.slug);
    });

export default function Writings() {
    return (
        <>
            <div
                id="writings"
                className="border-b-line mx-auto scroll-mt-[65px] border-b"
            >
                <div className="border-x-line border-x-0 md:mx-10 md:border-x">
                    <div className="px-5 py-6 md:px-9 md:py-9">
                        <p className="text-text-primary mb-2.5 text-xl font-semibold md:text-[32px]">
                            Writings
                        </p>
                        <p className="text-text-primary max-w-[821px] text-base md:text-xl">
                            Here are some of my writings and articles that I
                            have written, usually about web development and
                            programming, sometimes about my thoughts.
                        </p>
                    </div>
                    {blogPosts.slice(0, 3).map((post) => (
                        <WritingCard
                            key={post.slug}
                            title={post.title}
                            url={`/blog/${post.slug}`}
                        />
                    ))}
                    <div className="border-t-line flex items-center justify-center border-t p-5 md:p-7">
                        <Link
                            to="/writings"
                            className="text-text-primary flex items-center gap-2 text-base font-semibold md:text-xl"
                        >
                            Show More
                            <svg
                                viewBox="0 0 96 96"
                                className="fill-text-primary h-5 w-5 md:h-6 md:w-6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M64.0148 37.6568L29.5885 72.0832L23.9316 66.4264L58.358 32H28.0149V24H72.0148V68H64.0148V37.6568Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="border-b-line mx-auto border-b">
                <div className="border-x-line border-x-0 py-5 md:mx-10 md:border-x md:py-7"></div>
            </div>
        </>
    );
}
