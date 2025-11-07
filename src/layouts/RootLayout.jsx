import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            {/* You can add a shared header or navbar here if needed */}
            <main>
                <Outlet /> {/* ✅ This renders the current page */}
            </main>

            {/* ✅ This handles scroll-to-top behavior automatically */}
            <ScrollRestoration />
        </>
    );
}
