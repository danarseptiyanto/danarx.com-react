import React from "react";
import ButtonPrimary from "./Buttons/ButttonPrimary";
import { Link } from "react-router-dom";
import ButttonSecondary from "./Buttons/ButttonSecondary";
import ButttonFooter from "./Buttons/ButttonFooter";

export default function Footer() {
    return (
        <>
            <div className="border-b-line bg-bg-primary mx-auto border-b">
                <div className="border-x-line border-x-0 md:mx-10 md:border-x">
                    <div className="flex flex-col justify-between md:flex-row">
                        <div className="px-5 py-7 md:px-9 md:py-9">
                            <p className="text-text-primary max-w-[644px] text-xl leading-relaxed">
                                <b>Convinced? Lets Talk!</b> If you’re bored of
                                blending in drop us a line and let’s bring your
                                business to life.
                            </p>
                            <div className="mt-5 flex flex-col gap-2.5 md:flex-row">
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
                        <div className="md:border-l-line border-t-line max-w-[470px] border-t px-5 py-7 md:border-t-0 md:border-l md:px-9 md:py-9">
                            <p className="text-text-primary mr-7 max-w-[345px] text-base md:mr-8">
                                Go check my YouTube Channel for chill content
                                about web development and web design
                            </p>
                            <div className="mt-5 md:mt-6">
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
            <div className="border-b-line bg-bg-primary mx-auto border-b">
                <div className="border-x-line mx-0 flex h-[85px] items-center justify-center border-x-0 md:mx-10 md:justify-between md:border-x md:px-9">
                    <div className="text-text-primary text-base md:text-lg">
                        Danar Septiyanto © 2025
                    </div>
                    <div className="hidden items-center gap-5 md:flex">
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
