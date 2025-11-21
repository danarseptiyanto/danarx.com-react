import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
    return (
        <>
            {/* You can add a shared header or navbar here if needed */}
            <Navbar />
            <div className="bg-bg-secondary h-[65px]"></div>
            <main className="bg-bg-primary">
                <Outlet /> {/* ✅ This renders the current page */}
            </main>
            <Footer />

            {/* ✅ This handles scroll-to-top behavior automatically */}
            <ScrollRestoration />
        </>
    );
}
