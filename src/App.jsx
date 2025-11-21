import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writings from "@/components/Writings";
import Tools from "@/components/Tools";
import "@/App.css";

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Writings />
            <Tools />
        </>
    );
}
