import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { ProjectInfo, ProjectContent } from "@/components/ProjectInfo";
import ProjectGallery from "@/components/ProjectGallery";
import useTitle from "@/hooks/useTitle";

const images = [
    "project/surat-binusa/1.png",
    "project/surat-binusa/2.png",
    "project/surat-binusa/3.png",
    "project/surat-binusa/4.png",
    "project/surat-binusa/5.png",
    "project/surat-binusa/6.png",
    "project/surat-binusa/7.png",
];

export default function SuratBinusa() {
    useTitle("Project Surat Binusa - Danar Septiyanto");
    return (
        <>
            <ProjectHero
                title="Surat Binusa"
                description="Hi, I'm Danar Septiyanto, a freelance fullstack web developer based in Indonesia. I'm currently working as a freelance web developer. I love to build web applications that solve real problems."
                heroImage="/surat-binusa/surat-binusa-thumb.png"
            />
            <ProjectInfo
                url="https://surat.binusa.my.id"
                client="SMK Bina Nusantara"
                clientDescription="Correspondence Portal"
                projectDate="September 2024"
            >
                <ProjectContent title="Project Info">
                    Surat Binusa is the official correspondence portal of SMK
                    Bina Nusantara Semarang, created to streamline the
                    management of incoming letters, outgoing letters, and
                    internal documents. The platform provides a centralized
                    system that helps the school organize all administrative
                    correspondence efficiently, ensuring that no important
                    document is misplaced or overlooked. Each outgoing letter is
                    generated through the system, maintaining consistency and
                    professionalism in the school’s official communication. A
                    key feature of Surat Binusa is the integration of QR codes
                    on every outgoing letter. These QR codes allow recipients to
                    instantly verify the authenticity of the document by simply
                    scanning them, minimizing the risk of forged or invalid
                    letters. Beyond supporting daily administrative operations,
                    the platform also enhances data accuracy and transparency,
                    serving as a dependable tool for validating official
                    information and maintaining the integrity of school
                    correspondence.
                </ProjectContent>
                <ProjectContent title="Technology">
                    The Surat Binusa website uses modern web technologies to
                    deliver its educational content effectively online. The
                    spesific are Laravel as the backend framework, Inertia React
                    as templating engine, Tailwind CSS for styling, and MySQL as
                    the database. It is hosted on Hostinger.
                </ProjectContent>
            </ProjectInfo>
            <ProjectGallery
                images={images}
                urlEndpoint="https://ik.imagekit.io/dnrx/danarx/"
            />
        </>
    );
}
