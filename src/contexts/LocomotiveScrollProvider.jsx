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
    const resizeObserverRef = useRef(null);
    const location = useLocation();
    const [scroll, setScroll] = useState(null);

    const destroyScroll = () => {
        // Disconnect resize observer first
        if (resizeObserverRef.current) {
            resizeObserverRef.current.disconnect();
            resizeObserverRef.current = null;
        }
        if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.destroy();
            locomotiveScrollRef.current = null;
        }
    };

    const initScroll = () => {
        if (!scrollRef.current) return;

        destroyScroll();

        const instance = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.1,
            multiplier: 1,
            smartphone: { smooth: false },
            tablet: { smooth: false },
        });

        locomotiveScrollRef.current = instance;
        setScroll(instance);

        // Watch the container for ANY size change (e.g. lazy images loading in)
        // and tell LocomotiveScroll to recalculate heights.
        const ro = new ResizeObserver(() => {
            instance?.update();
        });
        ro.observe(scrollRef.current);
        resizeObserverRef.current = ro;
    };

    // Initialize on mount
    useEffect(() => {
        initScroll();
        return () => destroyScroll();
    }, []);

    // On every route change: scroll to top instantly, then re-init after DOM settles.
    useEffect(() => {
        // Scroll to top immediately before the page swaps
        if (locomotiveScrollRef.current) {
            locomotiveScrollRef.current.scrollTo(0, {
                duration: 0,
                disableLerp: true,
            });
        }

        // Re-init after React has rendered the new page's DOM.
        // 300ms gives enough time for initial layout + first image paints.
        const timer = setTimeout(() => {
            initScroll();
        }, 300);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <LocomotiveScrollContext.Provider value={{ scroll, isReady: !!scroll }}>
            <div ref={scrollRef} data-scroll-container>
                {children}
            </div>
        </LocomotiveScrollContext.Provider>
    );
};
