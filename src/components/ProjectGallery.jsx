import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Image } from "@imagekit/react";

export default function ProjectGallery({ images, urlEndpoint }) {
    const defaultUrlEndpoint = "https://ik.imagekit.io/dnrx/danarx/";

    const [popup, setPopup] = useState({
        open: false,
        src: null,
    });

    return (
        <div className="border-x-line border-b-line border-x-0 border-b md:mx-10 md:border-x">
            <div className="px-5 py-6 md:px-9 md:py-9">
                <div className="columns-1 gap-4 space-y-4 pt-4 md:columns-2 md:pt-0">
                    {images.map((src, index) => (
                        <div key={index} className="break-inside-avoid">
                            <Image
                                urlEndpoint={urlEndpoint || defaultUrlEndpoint}
                                src={src}
                                className="mb-4 w-full cursor-pointer object-cover"
                                alt={`Gallery image ${index + 1}`}
                                loading="lazy"
                                onClick={() => setPopup({ open: true, src })}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Popup Only Loads Image When Open */}
            {popup.open &&
                createPortal(
                    <div
                        className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                        onClick={() => setPopup({ open: false, src: null })}
                    >
                        <div onClick={(e) => e.stopPropagation()}>
                            <Image
                                urlEndpoint={urlEndpoint || defaultUrlEndpoint}
                                src={popup.src}
                                alt="Full image"
                                className="max-h-[95vh] max-w-[95vw] shadow-lg"
                            />
                        </div>
                    </div>,
                    document.body,
                )}
        </div>
    );
}
