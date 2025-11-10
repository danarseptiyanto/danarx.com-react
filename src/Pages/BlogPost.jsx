// src/pages/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import matter from "gray-matter";
import { marked } from "marked";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const posts = import.meta.glob("../blog/*.md", { as: "raw", eager: true });

export default function BlogPost() {
    const { slug } = useParams();
    const file = posts[`../blog/${slug}.md`];

    if (!file) return <p className="py-10 text-center">Post not found.</p>;

    const { data, content } = matter(file);
    const html = marked(content);

    return (
        <>
            <Navbar />
            <div className="prose prose-xl prose-invert mx-auto max-w-4xl px-4 py-10">
                <Link to="/">Back To Post</Link>
                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="mb-6 w-full rounded-xl"
                />
                <h1 className="mb-4 text-4xl font-bold">{data.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <Footer />
        </>
    );
}
