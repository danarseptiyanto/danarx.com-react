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
                description="Hi, I'm Danar Septiyanto, a freelance fullstack web developer based in Indonesia. I'm currently working as a freelance web developer. I love to build web applications that solve real problems."
                heroImage="/ticykit/ticykit-thumb.png"
            />
            <ProjectInfo
                url="https://ticykit.com"
                client="TicyKit"
                clientDescription="TicyKit"
                projectDate="September 2024"
            >
                <ProjectContent title="Project Info">
                    TicyKit is an educational platform aimed at improving the
                    competence and quality of teaching for educators and
                    students in Indonesia by leveraging digital technology. It
                    provides free online training programs, e-courses, and
                    innovative learning resources accessible anytime and
                    anywhere. The platform supports teachers and learners
                    through interactive content and community engagement to
                    enhance digital era learning. The platform encourages
                    lifelong learning and adaptation to digital transformation
                    in education, offering courses and materials for teachers,
                    students, and even university-level learning, all designed
                    to be flexible, accessible, and innovative. It is a
                    comprehensive resource for those looking to develop digital
                    literacy and effective learning strategies in the modern
                    age. The website also connects with social media channels
                    and offers certifications for training participation to
                    motivate and support a growing learning community.
                </ProjectContent>
                <ProjectContent title="Technology">
                    The TicyKit website uses modern web technologies to deliver
                    its educational content effectively online. While specific
                    technical details of the stack are not explicitly listed,
                    based on standard practices for such platforms
                </ProjectContent>
            </ProjectInfo>
            <ProjectGallery
                images={images}
                urlEndpoint="https://ik.imagekit.io/dnrx/danarx/"
            />
        </>
    );
}
