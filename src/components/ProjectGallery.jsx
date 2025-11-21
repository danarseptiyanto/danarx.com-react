import React from "react";
import { Image } from "@imagekit/react";

export default function ProjectGallery({ images, urlEndpoint }) {
    const defaultUrlEndpoint = "https://ik.imagekit.io/dnrx/danarx/";

    return (
        <div className="border-x-line border-b-line border-x-0 border-b md:mx-10 md:border-x">
            <div className="px-5 py-6 md:px-9 md:py-9">
                <div className="columns-1 gap-4 space-y-4 pt-4 md:columns-2 md:pt-0">
                    {images.map((src, index) => (
                        <div key={index} className="break-inside-avoid">
                            <Image
                                urlEndpoint={urlEndpoint || defaultUrlEndpoint}
                                src={src}
                                className="mb-4 w-full object-cover"
                                alt={`Gallery image ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
