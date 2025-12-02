import React from "react";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Writings from "@/components/Writings";
import Tools from "@/components/Tools";
import SEO from "@/components/SEO";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import "@/App.css";

export default function Home() {
    // Enable hash navigation for smooth scrolling to sections
    useHashNavigation();

    return (
        <>
            <SEO
                title="Home"
                description="Welcome to Danar Septiyanto's portfolio. Explore my web development projects, read my blog posts about technology and design, and discover the tools I use to build modern web applications."
            />
            <Hero />
            <Projects />
            <Writings />
            <Tools />
        </>
    );
}
