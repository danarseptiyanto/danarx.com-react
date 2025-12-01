import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";

const LocomotiveScrollContext = createContext(null);

export const useLocomotiveScroll = () => {
    return useContext(LocomotiveScrollContext);
};

export const LocomotiveScrollProvider = ({ children }) => {
    const scrollRef = useRef(null);
    const locomotiveScrollRef = useRef(null);
    const location = useLocation();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!scrollRef.current) return;

        // Initialize Locomotive Scroll
        locomotiveScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1, // Lower = smoother/slower (0.1 gives nice momentum on desktop)
            multiplier: 1, // Scroll speed multiplier for desktop
            smartphone: {
                smooth: false, // Use native scrolling on mobile
            },
            tablet: {
                smooth: false, // Use native scrolling on tablet
            },
        });

        setIsReady(true);

        // Cleanup on unmount
        return () => {
            if (locomotiveScrollRef.current) {
                locomotiveScrollRef.current.destroy();
                locomotiveScrollRef.current = null;
            }
        };
    }, []);

    // Update scroll on route change
    useEffect(() => {
        if (locomotiveScrollRef.current) {
            // Scroll to top on route change
            locomotiveScrollRef.current.scrollTo(0, {
                duration: 0,
                disableLerp: true,
            });

            // Update scroll after route change
            setTimeout(() => {
                locomotiveScrollRef.current?.update();
            }, 100);
        }
    }, [location.pathname]);

    return (
        <LocomotiveScrollContext.Provider
            value={{ scroll: locomotiveScrollRef.current, isReady }}
        >
            <div ref={scrollRef} data-scroll-container>
                {children}
            </div>
        </LocomotiveScrollContext.Provider>
    );
};
