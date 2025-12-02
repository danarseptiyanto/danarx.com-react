import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { ProjectContent, ProjectInfo } from "@/components/ProjectInfo";
import ProjectGallery from "@/components/ProjectGallery";
import SEO from "@/components/SEO";
import useTitle from "@/hooks/useTitle";

const images = [
    "project/bedlink-id/1.png",
    "project/bedlink-id/2.png",
    "project/bedlink-id/3.png",
    "project/bedlink-id/4.png",
    "project/bedlink-id/5.png",
    "project/bedlink-id/6.png",
    "project/bedlink-id/7.png",
    "project/bedlink-id/8.png",
    "project/bedlink-id/9.png",
];

export default function Bedlink() {
    useTitle("Project BEDlink - Danar Septiyanto");
    return (
        <>
            <SEO
                title="BEDlink"
                description="A customizable link-in-bio platform that lets you organize and share all your important links in one clean, easy-to-share page."
            />
            <ProjectHero
                title="BEDlink"
                description="BEDlink is a simple, customizable platform that lets you organize and share all your important links—like social media and websites—in one clean, easy-to-share page. just add your links, arrange them, and share."
                heroImage="/bedlink-id/project-long3.png"
            />
            <ProjectInfo
                url="https://bedlink.id"
                client="Belajar Era Digital"
                clientDescription="Microsite Platform"
                projectDate="September 2024"
            >
                <ProjectContent title="Project Info">
                    BEDlink is a platform designed to make it easier for you to
                    share all your important links in one place. With BEDlink,
                    you can create your own personal page containing essential
                    links such as social media, websites, and more, all neatly
                    organized into a single link that’s easy to share or place
                    in your social media bio. BEDlink is the perfect solution
                    for creators, business owners, or anyone who wants a simpler
                    way to share their important links. With a modern look and
                    flexible, fully customizable features, you can tailor your
                    BEDlink page to match your identity and needs. Ease of use
                    is at the core of our design. In just minutes, you can
                    create and personalize your BEDlink page, no technical
                    skills required. Simply add your links, arrange them, and
                    share them with your audience!
                </ProjectContent>
                <ProjectContent title="Technology">
                    BEDlink.id website uses modern web technologies like Laravel
                    as the backend framework, Tailwind CSS for styling, and
                    MySQL as the database. It is hosted on Hostinger.
                </ProjectContent>
            </ProjectInfo>
            <ProjectGallery
                images={images}
                urlEndpoint="https://ik.imagekit.io/dnrx/danarx/"
            />
        </>
    );
}
