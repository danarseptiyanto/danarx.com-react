import React, { useState, useEffect } from "react";
import PlusIconHero from "./PlusIconHero";
import LinksHero from "./LinksHero";
import { Image } from "@imagekit/react";

const heroImages = ["/hero.png", "/hero2.png", "/hero3.png"];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex >= heroImages.length) {
            const timeout = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentIndex(0);
            }, 500);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    useEffect(() => {
        if (!transitionEnabled) {
            const timeout = setTimeout(() => setTransitionEnabled(true), 50);
            return () => clearTimeout(timeout);
        }
    }, [transitionEnabled]);

    return (
        <>
            <div className="border-b-line bg-bg-secondary mx-auto border-b">
                <div className="border-x-line mx-0 flex grid-cols-2 flex-col-reverse border-x-0 md:mx-10 md:grid md:border-x">
                    <div className="border-r-line border-r">
                        <div className="border-b-line border-b px-5 py-6 md:px-9">
                            <PlusIconHero />
                            <h1 className="text-text-primary max-w-[600px] py-7 text-[36px] leading-tight font-semibold md:py-9 md:text-[60px] md:leading-16">
                                Freelance Fullstack Web Dev Available For Hire
                            </h1>
                            <PlusIconHero />
                        </div>
                        <div className="text-text-primary p-5 py-7 text-base leading-relaxed md:p-9 md:py-9 md:text-xl">
                            Hi, I'm Danar Septiyanto, a freelance fullstack web
                            developer based in Indonesia. I'm currently working
                            as a freelance web developer. I love to build web
                            applications that solve real problems.
                        </div>
                        <div className="flex justify-between">
                            <div className="bg-accent-primary border-t-line hidden aspect-square w-[180px] items-center justify-center border-t md:flex">
                                <Image
                                    urlEndpoint="https://ik.imagekit.io/dnrx/danarx/"
                                    src="ui/avatar.jpg"
                                />
                            </div>
                            <div className="grid w-full grid-cols-2">
                                <LinksHero
                                    target="_blank"
                                    url="https://github.com/danarseptiyanto"
                                    name="Github"
                                />
                                <LinksHero url="/#projects" name="Project" />
                                <LinksHero
                                    target="_blank"
                                    url="https://www.instagram.com/dnrsept/"
                                    name="Instagram"
                                />
                                <LinksHero url="/#writings" name="Writing" />
                                <LinksHero
                                    target="_blank"
                                    url="https://dribbble.com/danarsepti"
                                    name="Dribbble"
                                />
                                <LinksHero url="/contact" name="Contact" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-line border-line relative overflow-hidden border-b md:border-b-0">
                        <div
                            className={`flex h-full w-full ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {[...heroImages, heroImages[0]].map((src, i) => (
                                <div key={i} className="h-full w-full shrink-0">
                                    <Image
                                        urlEndpoint="https://ik.imagekit.io/dnrx/danarx/ui/"
                                        src={src}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-line bg-bg-secondary mx-auto border-b">
                <div className="border-x-line mx-0 border-x-0 py-4 md:mx-10 md:border-x md:py-7"></div>
            </div>
        </>
    );
}
