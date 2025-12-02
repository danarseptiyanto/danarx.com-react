// src/pages/BlogList.jsx
import matter from "gray-matter";
import SEO from "@/components/SEO";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const posts = import.meta.glob("../blog/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
});

const blogPosts = Object.entries(posts).map(([path, content]) => {
    const slug = path.split("/").pop().replace(".md", "");
    const { data } = matter(content, {
        engines: {
            javascript: false,
        },
    });
    return {
        slug,
        title: data.title,
        thumbnail: data.thumbnail,
        date: data.date,
    };
});

export default function BlogList() {
    return (
        <>
            <SEO
                title="Blog"
                description="Read articles and insights about web development, design, technology trends, and my experiences building modern web applications."
            />
            <div className="mx-auto max-w-4xl px-4 py-10">
                <h1 className="mb-6 text-3xl font-bold">Blog</h1>
                <div className="grid gap-6 md:grid-cols-2">
                    {blogPosts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="rounded-2xl border p-4 transition hover:shadow-lg"
                        >
                            <img
                                src={post.thumbnail}
                                alt={post.title}
                                className="mb-3 h-48 w-full rounded-xl object-cover"
                            />
                            <h2 className="text-xl font-semibold">
                                {post.title}
                            </h2>
                            <p className="text-sm text-gray-500">{post.date}</p>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
