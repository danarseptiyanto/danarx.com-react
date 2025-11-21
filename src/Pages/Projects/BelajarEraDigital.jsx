import React from "react";
import ProjectHero from "@/components/ProjectHero";
import ProjectInfo from "@/components/ProjectInfo";
import ProjectGallery from "@/components/ProjectGallery";
import useTitle from "@/hooks/useTitle";

const images = [
    "project/belajar-era-digital/1.png",
    "project/belajar-era-digital/2.png",
    "project/belajar-era-digital/3.png",
    "project/belajar-era-digital/4.png",
    "project/belajar-era-digital/5.png",
    "project/belajar-era-digital/6.png",
    "project/belajar-era-digital/7.png",
    "project/belajar-era-digital/8.png",
];

export default function belajarEraDigital() {
    useTitle("Project Belajar Era Digital - Danar Septiyanto");
    return (
        <>
            <ProjectHero
                title="Belajar Era Digital"
                description="Hi, I'm Danar Septiyanto, a freelance fullstack web developer based in Indonesia. I'm currently working as a freelance web developer. I love to build web applications that solve real problems."
                heroImage="/img/ui/project-long4.png"
            />
            <ProjectInfo
                client="Belajar Era Digital"
                clientDescription="Educational Platform"
                projectDate="September 2024"
                projectInfo="BelajarEraDigital.com is an educational platform aimed at improving the competence and quality of teaching for educators and students in Indonesia by leveraging digital technology. It provides free online training programs, e-courses, and innovative learning resources accessible anytime and anywhere. The platform supports teachers and learners through interactive content and community engagement to enhance digital era learning. The platform encourages lifelong learning and adaptation to digital transformation in education, offering courses and materials for teachers, students, and even university-level learning, all designed to be flexible, accessible, and innovative. It is a comprehensive resource for those looking to develop digital literacy and effective learning strategies in the modern age. The website also connects with social media channels and offers certifications for training participation to motivate and support a growing learning community."
                technology="The BelajarEraDigital.com website uses modern web technologies to deliver its educational content effectively online. While specific technical details of the stack are not explicitly listed, based on standard practices for such platforms"
            />
            <ProjectGallery
                images={images}
                urlEndpoint="https://ik.imagekit.io/dnrx/danarx/"
            />
        </>
    );
}
