import React from "react";
import Navbar from "../../components/Navbar";
import PlusIconHero from "../../components/PlusIconHero";

export default function belajarEraDigital() {
    return (
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
                                Hi, I'm Danar Septiyanto, a freelance fullstack
                                web developer based in Indonesia. I'm currently
                                working as a freelance web developer. I love to
                                build web applications that solve real problems.
                            </p>
                        </div>
                        <PlusIconHero />
                    </div>
                    <img
                        className="bg-accent-secondary w-full object-cover"
                        src="/img/ui/project-long1.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
