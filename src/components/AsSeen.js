import React from 'react';
import Image from 'next/image';

import Logo1 from "../../public/img-assets/asSeen/Logo1.svg";
import Logo2 from "../../public/img-assets/asSeen/Logo2.svg";
import Logo3 from "../../public/img-assets/asSeen/Logo3.svg";
import Logo4 from "../../public/img-assets/asSeen/Logo4.svg";
import Logo5 from "../../public/img-assets/asSeen/Logo5.svg";

import FadeIn from "@/components/FadeIn";

export default function AsSeen() {
    return (
        <section className='bg-dark text-light'>
            <div className='2xl:w-3/5 mx-auto py-8 px-10'>
                <div className="pb-6 flex justify-center">
                    <p className="text-2xl">
                        As featured in
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-16 sm:gap-12 sm:grid-cols-5 lg:gap-28 z-0">

                    <div className='flex justify-center items-center'>
                        <FadeIn delay={0.2}>
                            <Image
                                className='transform transition duration-200 hover:scale-105'
                                src={Logo1}
                                alt="Bloomberg logo"
                            />
                        </FadeIn>
                    </div>

                    <div className='flex justify-center items-center'>
                        <FadeIn delay={0.4}>
                            <Image
                                className='transform transition duration-200 hover:scale-105'
                                src={Logo2}
                                alt="The Economist logo"
                            />
                        </FadeIn>
                    </div>

                    <div className='flex justify-center items-center'>
                        <FadeIn delay={0.6}>
                            <Image
                                className='transform transition duration-200 hover:scale-105'
                                src={Logo3}
                                alt="Financial Times logo"
                            />
                        </FadeIn>
                    </div>

                    <div className='flex justify-center items-center'>
                        <FadeIn delay={0.8}>
                            <Image
                                className='transform transition duration-200 hover:scale-105'
                                src={Logo4}
                                alt="Business Insider logo"
                            />
                        </FadeIn>
                    </div>

                    <div className='flex justify-center items-center'>
                        <FadeIn delay={1.0}>
                            <Image
                                className='transform transition duration-200 hover:scale-105'
                                src={Logo5}
                                alt="The Guardian logo"
                            />
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
}