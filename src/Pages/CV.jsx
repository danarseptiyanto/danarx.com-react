import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";

const CV = () => {
    return (
        <div className="min-h-svh bg-neutral-300">
            <Link to="/">back</Link>
            <div className="bg-cv-bg font-poppins border-cv-line relative mx-auto h-[1200px] max-w-[1420px] border">
                <img src="img/ui/cv-bg.png" className="absolute inset-0 z-0" />
                <div className="flex items-end justify-between p-20">
                    <div className="relative">
                        <img
                            src="img/ui/avatar2.png"
                            className="mb-4 w-[75px]"
                        />
                        <p className="text-cv-text-primary z-10 text-[40px] leading-tight font-semibold">
                            Danar Septiyanto, S.Pd
                        </p>
                        <p className="text-[29px] text-neutral-600">
                            Curriculum Vitae
                        </p>
                    </div>
                    <div className="text-cv-text-primary relative text-right text-[19px] leading-relaxed">
                        <p>Mobile : 0434353435</p>
                        <p>Email : septiyandanar@gmail.com</p>
                        <p>Portolio: www.danarx.com</p>
                    </div>
                </div>
                <div className="border-cv-line relative z-50 border-b"></div>
                <div className="relative px-20 py-14">
                    <div>
                        <h2 className="text-cv-text-primary mb-2.5 text-3xl font-semibold">
                            Profil
                        </h2>
                        <p className="text-cv-text-primary text-[19px]">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem.
                        </p>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-cv-text-primary mb-4 text-3xl font-semibold">
                            Pengalaman Kerja
                        </h2>
                        <div className="-ml-3 flex gap-1">
                            <div className="-mt-1 text-right text-sm font-semibold">
                                1.
                            </div>
                            <div className="w-[225px]">
                                <p className="text-xl leading-tight font-semibold">
                                    SMK Bina Nusantara Semarang
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </div>
    );
};

export default CV;
