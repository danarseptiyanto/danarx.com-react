import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Footer from "../components/Footer";
import { LocomotiveScrollProvider } from "../contexts/LocomotiveScrollProvider";

export default function RootLayout() {
    useEffect(() => {
        document.title = "Danar Septiyanto";
    }, []);

    return (
        <>
            <Navbar />
            <LocomotiveScrollProvider>
                <div className="bg-bg-secondary h-[65px]"></div>
                <main className="bg-bg-primary">
                    <Outlet /> {/* ✅ This renders the current page */}
                </main>
                <Footer />
            </LocomotiveScrollProvider>
        </>
    );
}
