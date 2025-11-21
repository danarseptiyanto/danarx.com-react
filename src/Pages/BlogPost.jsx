// src/pages/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";
import { marked } from "marked";
import { Image } from "@imagekit/react";

const posts = import.meta.glob("../blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

export default function BlogPost() {
    const { slug } = useParams();
    const file = posts[`../blog/${slug}.md`];

    if (!file)
        return (
            <div className="flex h-svh items-center justify-center text-center text-lg text-white">
                Post not found.
            </div>
        );

    const { data, content } = matter(file);
    const html = marked(content);

    return (
        <>
            <div className="border-b-line mx-auto border-b">
                <div className="border-x-line mx-0 flex justify-between border-x-0 px-5 md:mx-10 md:border-x md:px-9">
                    <div className="prose prose-md md:prose-xl prose-invert mx-auto max-w-4xl py-7 md:py-10">
                        <div className="-mb-2 flex items-center justify-between">
                            <Link
                                className="inline-flex items-center gap-1.5 text-base no-underline md:text-lg"
                                to="/#writing"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="fill-accent-primary h-6"
                                >
                                    <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                                </svg>
                                Back To Blog
                            </Link>
                            <div className="inline-flex items-center gap-2 text-base no-underline md:text-lg">
                                {data.date}
                            </div>
                        </div>
                        <Image
                            urlEndpoint="https://ik.imagekit.io/dnrx/danarx/blog/"
                            src={data.thumbnail}
                            className="bg-accent-secondary aspect-video w-full object-cover"
                            alt={data.title}
                        />
                        <h1 className="mb-5 text-2xl font-bold md:mb-8 md:text-4xl">
                            {data.title}
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
        </>
    );
}
