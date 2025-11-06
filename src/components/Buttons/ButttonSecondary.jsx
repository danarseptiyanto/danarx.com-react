import React from "react";

export default function ButttonSecondary({ label, type }) {
    return (
        <button
            type={type}
            className="text-text-primary border-line hover:bg-accent-secondary/30 flex h-[46px] cursor-pointer items-center justify-center rounded-full border px-5 pb-0.5 text-base font-semibold transition-colors duration-200"
        >
            {label}
        </button>
    );
}
