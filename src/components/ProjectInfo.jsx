import React from "react";

export default function ProjectInfo({
    client,
    clientDescription,
    projectDate,
    projectInfo,
    technology,
}) {
    return (
        <div className="border-b-line mx-auto border-b">
            <div className="border-x-line border-x-0 md:mx-10 md:border-x">
                <div className="mx-auto flex w-full max-w-[1065px] justify-between px-5 py-6 md:px-9 md:py-16">
                    <div className="space-y-7 pt-2">
                        <div>
                            <p className="text-text-primary mb-2 text-lg font-bold">
                                Client
                            </p>
                            <p className="text-text-primary text-lg">
                                {client}
                            </p>
                        </div>
                        <div>
                            <p className="text-text-primary mb-2 text-lg font-bold">
                                What they do
                            </p>
                            <p className="text-text-primary text-lg">
                                {clientDescription}
                            </p>
                        </div>
                        <div>
                            <p className="text-text-primary mb-2 text-lg font-bold">
                                Project Date
                            </p>
                            <p className="text-text-primary text-lg">
                                {projectDate}
                            </p>
                        </div>
                    </div>
                    <div className="max-w-[723px] space-y-6">
                        <div className="space-y-3">
                            <h2 className="text-text-primary text-3xl font-semibold">
                                Project info
                            </h2>
                            <p className="text-text-primary max-w-[723px] text-lg leading-relaxed">
                                {projectInfo}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-text-primary text-3xl font-semibold">
                                Technology
                            </h2>
                            <p className="text-text-primary max-w-[723px] text-lg leading-relaxed">
                                {technology}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
