import matter from "gray-matter";
import WritingCard from "@/components/WritingCard";
import SEO from "@/components/SEO";
import PlusIconHero from "@/components/PlusIconHero";

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
        const aNum = parseInt(a.slug.split("-")[0], 10);
        const bNum = parseInt(b.slug.split("-")[0], 10);
        if (!isNaN(aNum) && !isNaN(bNum)) {
            return bNum - aNum;
        }
        return b.slug.localeCompare(a.slug);
    });

export default function Writings() {
    return (
        <>
            <SEO
                title="Writings"
                description="All my writings and articles about web development, programming, and thoughts."
            />
            <div className="bg-bg-secondary">
                <div className="mx-auto">
                    <div className="border-x-line mx-0 border-x-0 md:mx-10 md:grid md:border-x">
                        <div className="px-5 py-5 md:px-9">
                            <PlusIconHero />
                            <div className="flex flex-col justify-between gap-2 py-10 md:flex-row md:items-center md:gap-5">
                                <div className="pb-2">
                                    <h1 className="text-text-primary max-w-[600px] text-[28px] leading-tight font-semibold md:text-[48px]">
                                        Writings
                                    </h1>
                                </div>
                                <p className="text-text-primary max-w-[700px] text-lg md:text-xl">
                                    Explore my latest articles and insights.
                                    This space is dedicated to sharing detailed
                                    project breakdowns, and thoughtful
                                    perspectives on the work I do. Feel free to
                                    read, share, and reach out if a topic sparks
                                    your interest.
                                </p>
                            </div>
                            <PlusIconHero />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-y-line mx-auto border-y">
                <div className="border-x-line border-x-0 md:mx-10 md:border-x">
                    {/* <div className="px-5 py-6 md:px-9 md:py-9">
                        <p className="text-text-primary mb-2.5 text-xl font-semibold md:text-[32px]">
                            Writings
                        </p>
                        <p className="text-text-primary max-w-[821px] text-base md:text-xl">
                            All my writings and articles, collected in one
                            place.
                        </p>
                    </div>*/}
                    {blogPosts.map((post) => (
                        <WritingCard
                            key={post.slug}
                            title={post.title}
                            url={`/blog/${post.slug}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
