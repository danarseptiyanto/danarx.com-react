import React from "react";
import PlusIconHero from "./PlusIconHero";

export default function ProjectHero({ title, description, heroImage }) {
    return (
        <div className="bg-bg-secondary">
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
                                    {title}
                                </h1>
                            </div>
                            <p className="max-w-[700px] text-xl text-white">
                                {description}
                            </p>
                        </div>
                        <PlusIconHero />
                    </div>
                    <img
                        className="bg-accent-secondary border-line h-90 w-full border-t object-cover object-top"
                        src={heroImage}
                        alt={title}
                    />
                </div>
            </div>
        </div>
    );
}
