import React from "react";
import ButtonPrimary from "./Buttons/ButttonPrimary";

export default function ProjectInfo({
    client,
    clientDescription,
    projectDate,
    projectInfo,
    technology,
    url,
}) {
    return (
        <div className="border-b-line mx-auto border-b">
            <div className="border-x-line border-x-0 md:mx-10 md:border-x">
                <div className="mx-auto flex w-full max-w-[1065px] flex-col justify-between px-5 py-6 md:flex-row md:px-9 md:py-16">
                    <div className="border-b-line -mx-5 space-y-4 border-b px-5 pt-2 pb-8 md:space-y-7 md:border-b-0">
                        <div>
                            <p className="text-text-primary mb-2 font-bold md:text-lg">
                                Client
                            </p>
                            <p className="text-text-primary md:text-lg">
                                {client}
                            </p>
                        </div>
                        <div>
                            <p className="text-text-primary mb-2 font-bold md:text-lg">
                                What they do
                            </p>
                            <p className="text-text-primary md:text-lg">
                                {clientDescription}
                            </p>
                        </div>
                        <div>
                            <p className="text-text-primary mb-2 font-bold md:text-lg">
                                Project Date
                            </p>
                            <p className="text-text-primary md:text-lg">
                                {projectDate}
                            </p>
                        </div>
                        <a href={url} target="_blank">
                            <ButtonPrimary label="Visit Website" />
                        </a>
                    </div>
                    <div className="max-w-[723px] space-y-6 pt-8 pb-3 md:pt-0 md:pb-0">
                        <div className="space-y-2 md:space-y-3">
                            <h2 className="text-text-primary text-xl font-semibold md:text-3xl">
                                Project info
                            </h2>
                            <p className="text-text-primary max-w-[723px] leading-relaxed md:text-lg">
                                {projectInfo}
                            </p>
                        </div>
                        <div className="space-y-2 md:space-y-3">
                            <h2 className="text-text-primary text-xl font-semibold md:text-3xl">
                                Technology
                            </h2>
                            <p className="text-text-primary max-w-[723px] leading-relaxed md:text-lg">
                                {technology}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
