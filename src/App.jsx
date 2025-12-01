import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writings from "@/components/Writings";
import Tools from "@/components/Tools";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import "@/App.css";

export default function Home() {
    // Enable hash navigation for smooth scrolling to sections
    useHashNavigation();

    return (
        <>
            <Hero />
            <Projects />
            <Writings />
            <Tools />
        </>
    );
}
