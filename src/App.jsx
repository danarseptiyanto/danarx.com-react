import React from "react";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Writings from "./components/Writings";
import Tools from "./components/Tools";
import "./App.css";

export default function Home() {
    return (
        <>
            {/* <Link to="/cv" className="text-white">
                vcccc
            </Link>*/}
            <div className="bg-bg-secondary">
                <Hero />
            </div>
            <Projects />
            <Writings />
            <Tools />
        </>
    );
}
