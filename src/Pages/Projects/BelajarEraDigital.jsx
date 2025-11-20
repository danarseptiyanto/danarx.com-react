import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PlusIconHero from "../../components/PlusIconHero";
const images = [
    "/img/project/belajar-era-digital/1.png",
    "/img/project/belajar-era-digital/2.png",
    "/img/project/belajar-era-digital/3.png",
    "/img/project/belajar-era-digital/4.png",
    "/img/project/belajar-era-digital/8.png",
    "/img/project/belajar-era-digital/5.png",
    "/img/project/belajar-era-digital/6.png",
    "/img/project/belajar-era-digital/7.png",
    "/img/project/belajar-era-digital/9.png",
];

export default function belajarEraDigital() {
    return (
        <>
            <div className="bg-bg-secondary">
                <Navbar />
                <div className="border-b-line mx-auto border-b">
                    <div className="border-x-line mx-0 border-x-0 md:mx-10 md:grid md:border-x">
                        <div className="px-5 py-5 md:px-9">
                            <PlusIconHero />
                            <div className="flex flex-col items-center justify-between gap-5 py-10 md:flex-row">
                                <div className="pb-2">
                                    <p className="text-accent-primary text-2xl leading-none font-semibold">
                                        Project
                                    </p>
                                    <h1 className="text-text-primary max-w-[600px] text-[36px] leading-tight font-semibold md:text-[48px]">
                                        Belajar Era Digital
                                    </h1>
                                </div>
                                <p className="max-w-[700px] text-xl text-white">
                                    Hi, I'm Danar Septiyanto, a freelance
                                    fullstack web developer based in Indonesia.
                                    I'm currently working as a freelance web
                                    developer. I love to build web applications
                                    that solve real problems.
                                </p>
                            </div>
                            <PlusIconHero />
                        </div>
                        <img
                            className="bg-accent-secondary border-line h-90 w-full border-t object-cover object-top"
                            src="/img/ui/project-long4.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="border-b-line mx-auto border-b">
                <div className="border-x-line border-x-0 md:mx-10 md:border-x">
                    <div className="mx-auto flex w-full max-w-[1065px] justify-between px-5 py-6 md:px-9 md:py-16">
                        <div className="space-y-7 pt-2">
                            <div>
                                <p className="text-text-primary mb-2 text-lg font-bold">
                                    Client
                                </p>
                                <p className="text-text-primary text-lg">
                                    Belajar Era Digital
                                </p>
                            </div>
                            <div>
                                <p className="text-text-primary mb-2 text-lg font-bold">
                                    What they do
                                </p>
                                <p className="text-text-primary text-lg">
                                    Educational Platform
                                </p>
                            </div>
                            <div>
                                <p className="text-text-primary mb-2 text-lg font-bold">
                                    Project Date
                                </p>
                                <p className="text-text-primary text-lg">
                                    September 2024
                                </p>
                            </div>
                        </div>
                        <div className="max-w-[723px] space-y-6">
                            <div className="space-y-3">
                                <h2 className="text-text-primary text-3xl font-semibold">
                                    Project info
                                </h2>
                                <p className="text-text-primary max-w-[723px] text-lg leading-relaxed">
                                    BelajarEraDigital.com is an educational
                                    platform aimed at improving the competence
                                    and quality of teaching for educators and
                                    students in Indonesia by leveraging digital
                                    technology. It provides free online training
                                    programs, e-courses, and innovative learning
                                    resources accessible anytime and anywhere.
                                    The platform supports teachers and learners
                                    through interactive content and community
                                    engagement to enhance digital era learning.
                                    The platform encourages lifelong learning
                                    and adaptation to digital transformation in
                                    education, offering courses and materials
                                    for teachers, students, and even
                                    university-level learning, all designed to
                                    be flexible, accessible, and innovative. It
                                    is a comprehensive resource for those
                                    looking to develop digital literacy and
                                    effective learning strategies in the modern
                                    age. The website also connects with social
                                    media channels and offers certifications for
                                    training participation to motivate and
                                    support a growing learning community.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-text-primary text-3xl font-semibold">
                                    Technology
                                </h2>
                                <p className="text-text-primary max-w-[723px] text-lg leading-relaxed">
                                    The BelajarEraDigital.com website uses
                                    modern web technologies to deliver its
                                    educational content effectively online.
                                    While specific technical details of the
                                    stack are not explicitly listed, based on
                                    standard practices for such platforms
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pb-6 md:px-9 md:pb-9">
                        <div className="columns-1 gap-4 space-y-4 md:columns-2">
                            {images.map((src, index) => (
                                <div key={index} className="break-inside-avoid">
                                    <img
                                        src={src}
                                        className="mb-4 w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
