import React from "react";
import ButtonPrimary from "./Buttons/ButttonPrimary";
import { Link } from "react-router-dom";
import ButttonSecondary from "./Buttons/ButttonSecondary";
import ButttonFooter from "./Buttons/ButttonFooter";

export default function Footer() {
    return (
        <>
            <div className="border-b-line mx-auto border-b">
                <div className="border-x-line mx-10 border-x-0 md:border-x">
                    <div className="flex justify-between">
                        <div className="px-9 py-9">
                            <p className="text-text-primary max-w-[644px] leading-relaxed text-xl">
                                <b>Convinced? Lets Talk!</b> If you’re bored of
                                blending in drop us a line and let’s bring your
                                business to life.
                            </p>
                            <div className="mt-5 flex gap-2.5">
                                <Link href="#">
                                    <ButtonPrimary
                                        label="Contact Us"
                                        type="button"
                                    />
                                </Link>
                                <Link href="#">
                                    <ButttonSecondary
                                        label="DM me on Instagram"
                                        type="button"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="border-l-line max-w-[470px] border-l px-9 py-9">
                            <p className="text-text-primary mr-8 max-w-[345px] text-base">
                                Go check my YouTube Channel for chill content
                                about web development and web design
                            </p>
                            <div className="mt-6">
                                <Link href="#">
                                    <ButtonPrimary
                                        label="YouTube Channel"
                                        type="button"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-b-line mx-auto border-b">
                <div className="border-x-line mx-10 flex h-[85px] items-center justify-between border-x-0 px-9 md:border-x">
                    <div className="text-text-primary text-lg">
                        Danar Septiyanto © 2025
                    </div>
                    <div className="flex items-center gap-5">
                        <Link href="#">
                            <ButttonFooter label="GitHub" type="button" />
                        </Link>
                        <Link href="#">
                            <ButttonFooter label="Instagram" type="button" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
