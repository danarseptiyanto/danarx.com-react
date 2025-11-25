import PlusIconHero from "@/components/PlusIconHero";
import React from "react";

export function Contact() {
    return (
        <>
            <div className="bg-bg-secondary">
                <div className="border-b-line mx-auto border-b">
                    <div className="border-x-line mx-0 border-x-0 md:mx-10 md:grid md:border-x">
                        <div className="px-5 py-5 md:px-9">
                            <PlusIconHero />
                            <div className="flex flex-col justify-between gap-2 py-10 md:flex-row md:items-center md:gap-5">
                                <div className="pb-2">
                                    <h1 className="text-text-primary max-w-[600px] text-[28px] leading-tight font-semibold md:text-[48px]">
                                        Contact Me
                                    </h1>
                                </div>
                                <p className="text-text-primary max-w-[700px] text-lg md:text-xl">
                                    I'm here to help you with any questions or
                                    concerns you may have. Whether you need
                                    assistance with a project, want to discuss a
                                    potential collaboration, or just want to say
                                    hello, feel free to reach out to me.
                                </p>
                            </div>
                            <PlusIconHero />
                        </div>
                    </div>
                </div>
            </div>
            <form
                action="https://formsubmit.co/septiyandanar@gmail.com"
                method="POST"
                className="border-b-line mx-auto border-b"
            >
                <div className="border-x-line grid grid-cols-2 border-x-0 md:mx-10 md:border-x">
                    <div className="border-line border-r border-b px-5 py-5 md:px-9 md:py-5">
                        <input
                            type="text"
                            name="name"
                            className="text-text-primary w-full border-none bg-transparent text-xl outline-none md:text-xl"
                            placeholder="Name *"
                            required
                        />
                    </div>
                    <div className="border-line border-b px-5 py-5 md:px-9 md:py-5">
                        <input
                            type="email"
                            name="email"
                            className="text-text-primary w-full border-none bg-transparent text-xl outline-none md:text-xl"
                            placeholder="Email *"
                            required
                        />
                    </div>
                    <div className="border-line border-r border-b px-5 py-5 md:px-9 md:py-5">
                        <input
                            type="tel"
                            name="phone"
                            className="text-text-primary w-full border-none bg-transparent text-xl outline-none md:text-xl"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="border-line border-b px-5 py-5 md:px-9 md:py-5">
                        <input
                            type="text"
                            name="job"
                            className="text-text-primary w-full border-none bg-transparent text-xl outline-none md:text-xl"
                            placeholder="Jobs"
                        />
                    </div>
                </div>
                <div className="border-x-line flex flex-1 flex-col border-x-0 md:mx-10 md:border-x">
                    <div className="flex flex-1 flex-col px-5 py-5 md:px-9 md:py-5">
                        <textarea
                            name="message"
                            className="text-text-primary h-full w-full resize-none border-none bg-transparent text-xl outline-none md:text-xl"
                            placeholder="Message *"
                            rows="20"
                            required
                        ></textarea>
                        {/* FormSubmit.co configuration */}
                        <input
                            type="hidden"
                            name="_next"
                            value="https://google.com"
                        />
                        <input type="hidden" name="_captcha" value="false" />
                    </div>
                    <button
                        type="submit"
                        className="bg-accent-primary text-text-primary hover:bg-accent-primary/80 border-line flex h-[65px] cursor-pointer items-center justify-center border-t px-5 text-xl font-semibold transition-colors duration-200"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </>
    );
}

export function ContactSuccess() {
    return (
        <>
            <div className="bg-bg-secondary">
                <div className="border-b-line mx-auto border-b">
                    <div className="border-x-line mx-0 border-x-0 md:mx-10 md:grid md:border-x">
                        <div className="px-5 py-5 md:px-9">
                            <PlusIconHero />
                            <div className="flex h-[70vh] flex-col justify-between gap-2 px-28 md:flex-row md:items-center md:gap-5">
                                <div className="pb-2">
                                    <h1 className="text-text-primary max-w-[600px] text-[28px] leading-tight font-semibold md:text-[48px]">
                                        Message Sent
                                    </h1>
                                </div>
                                <p className="text-text-primary max-w-[700px] text-lg md:text-xl">
                                    Thank you for your message! I will get back
                                    to you as soon as possible.
                                </p>
                            </div>
                            <PlusIconHero />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
