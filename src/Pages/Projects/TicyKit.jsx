import React from "react";
import ProjectHero from "@/components/ProjectHero";
import { ProjectInfo, ProjectContent } from "@/components/ProjectInfo";
import ProjectGallery from "@/components/ProjectGallery";
import useTitle from "@/hooks/useTitle";

const images = [
    "project/ticykit/5.png",
    "project/ticykit/7.png",
    "project/ticykit/8.png",
    "project/ticykit/4.png",
];

export default function TicyKit() {
    useTitle("Project TicyKit - Danar Septiyanto");
    return (
        <>
            <ProjectHero
                title="TicyKit"
                description="Online education platform that provides downloadable teaching materials like worksheets, e-books, and lesson modules. It helps teachers prepare classroom content more easily with ready-made resources.
"
                heroImage="/ticykit/ticykit-thumb.png"
            />
            <ProjectInfo
                url="https://ticykit.com"
                client="TicyKit"
                clientDescription="Online Education Platform"
                projectDate="Desember 2023"
            >
                <ProjectContent title="Project Info">
                    TicyKit is an online educational platform that provides a
                    collection of digital learning materials aimed at teachers,
                    students, and parents. It offers resources such as
                    worksheets, e-books, teaching modules, and presentation
                    materials designed to support classroom learning and lesson
                    preparation. The platform focuses on age-appropriate and
                    curriculum-aligned content, helping educators create
                    structured teaching plans through tools like modul ajar and
                    ATP generators. Although it appears to operate as part of
                    Belajar Era Digital rather than under its own standalone
                    domain, TicyKit serves as a centralized space for practical
                    and easy-to-use teaching resources that can be downloaded
                    and applied directly in educational settings.
                </ProjectContent>
                <ProjectContent title="Technology">
                    TicyKit website uses Laravel as the backend framework,
                    Laravel Blade as templating engine, Tailwind CSS for
                    styling, and MySQL as the database. It is hosted on
                    Hostinger.
                </ProjectContent>
            </ProjectInfo>
            <ProjectGallery
                images={images}
                urlEndpoint="https://ik.imagekit.io/dnrx/danarx/"
            />
        </>
    );
}
