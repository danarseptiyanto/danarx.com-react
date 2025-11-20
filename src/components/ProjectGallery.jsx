import React from "react";

export default function ProjectGallery({ images }) {
    return (
        <div className="border-x-line border-x-0 md:mx-10 md:border-x">
            <div className="px-5 pb-6 md:px-9 md:pb-9">
                <div className="columns-1 gap-4 space-y-4 md:columns-2">
                    {images.map((src, index) => (
                        <div key={index} className="break-inside-avoid">
                            <img
                                src={src}
                                className="mb-4 w-full object-cover"
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
