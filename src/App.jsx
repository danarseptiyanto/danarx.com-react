import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Writings from "./components/Writings";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import "./App.css";

export default function Home() {
    return (
        <>
            <Link to="/cv" className="text-white">
                vcccc
            </Link>
            <div className="bg-bg-secondary">
                <Navbar />
                <Hero />
            </div>
            <Projects />
            <Writings />
            <Tools />
            <Footer />
        </>
    );
}
