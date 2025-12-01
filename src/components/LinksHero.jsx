import React from "react";
import { Link } from "react-router-dom";

export default function LinksHero({ url, name, ...rest }) {
    return (
        <Link
            to={url}
            {...rest}
            className="border-t-line group hover:border-bg-accent-primary/80 hover:bg-accent-primary/90 flex items-center justify-between border-t pl-5 transition-colors duration-300 md:pl-6"
        >
            <p className="text-text-primary text-sm md:text-base">{name}</p>
            <div className="bg-line group-hover:bg-accent-primary flex aspect-square h-12 items-center justify-center transition-colors duration-500 md:h-full">
                <svg
                    viewBox="0 0 33 33"
                    className="fill-text-primary aspect-square w-[26px] md:w-[33px]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M22.0051 12.9445L10.1711 24.7786L8.22656 22.8341L20.0606 11H9.63019V8.25H24.7551V23.375H22.0051V12.9445Z" />
                </svg>
            </div>
        </Link>
    );
}
