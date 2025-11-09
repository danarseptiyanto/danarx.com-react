import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@imagekit/react";

export default function Projects() {
    return (
        <div className="border-b-line mx-auto border-b">
            <div className="border-x-line mx-0 border-x-0 px-5 py-7 md:mx-10 md:border-x md:px-9 md:py-9">
                <p className="text-text-primary text-xl font-semibold md:text-[32px]">
                    Projects
                </p>
                <div className="mt-5 grid grid-cols-1 gap-5 pb-3 md:grid-cols-2 md:gap-6">
                    <Link href="#">
                        <Image
                            urlEndpoint="https://ik.imagekit.io/dnrx/danarx/thumbnail-project/"
                            src="project1.png"
                            className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            urlEndpoint="https://ik.imagekit.io/dnrx/danarx/thumbnail-project/"
                            src="project2.png"
                            className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            urlEndpoint="https://ik.imagekit.io/dnrx/danarx/thumbnail-project/"
                            src="project3.png"
                            className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            urlEndpoint="https://ik.imagekit.io/dnrx/danarx/thumbnail-project/"
                            src="project3.png"
                            className="bg-line hover:bg-accent-primary aspect-video w-full transition-colors duration-200"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
