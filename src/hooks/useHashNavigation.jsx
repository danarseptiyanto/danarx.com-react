import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocomotiveScroll } from "../contexts/LocomotiveScrollProvider";

/**
 * Custom hook to handle hash navigation with Locomotive Scroll
 * Scrolls to elements with matching IDs when hash changes
 */
export const useHashNavigation = () => {
    const location = useLocation();
    const { scroll } = useLocomotiveScroll();

    useEffect(() => {
        if (!scroll) return;

        // Get the hash from the URL (e.g., #projects)
        const hash = location.hash;

        if (hash) {
            // Remove the # to get the element ID
            const elementId = hash.substring(1);
            const element = document.getElementById(elementId);

            if (element) {
                // Small delay to ensure Locomotive Scroll is ready
                setTimeout(() => {
                    scroll.scrollTo(element, {
                        offset: -65, // Offset for fixed navbar height
                        duration: 1000, // Smooth scroll duration
                    });
                }, 100);
            }
        }
    }, [location.hash, scroll]);
};
