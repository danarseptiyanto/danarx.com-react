import React from "react";
import PlusIconHero from "./PlusIconHero";
import { Image } from "@imagekit/react";

export default function ProjectHero({ title, description, heroImage }) {
    return (
        <div className="bg-bg-secondary">
            <div className="border-b-line mx-auto border-b">
                <div className="border-x-line mx-0 border-x-0 md:mx-10 md:grid md:border-x">
                    <div className="px-5 py-5 md:px-9">
                        <PlusIconHero />
                        <div className="flex flex-col justify-between gap-2 py-10 md:flex-row md:items-center md:gap-5">
                            <div className="pb-2">
                                <p className="text-accent-primary mb-1 text-lg leading-none font-semibold md:mb-0 md:text-2xl">
                                    Project
                                </p>
                                <h1 className="text-text-primary max-w-[600px] text-[28px] leading-tight font-semibold md:text-[48px]">
                                    {title}
                                </h1>
                            </div>
                            <p className="text-text-primary max-w-[700px] text-lg md:text-xl">
                                {description}
                            </p>
                        </div>
                        <PlusIconHero />
                    </div>
                    <Image
                        urlEndpoint="https://ik.imagekit.io/dnrx/danarx/project/"
                        src={heroImage}
                        className="bg-accent-secondary border-line h-28 w-full border-t object-cover object-top md:h-90"
                        alt={title}
                    />
                </div>
            </div>
        </div>
    );
}
