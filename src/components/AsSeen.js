import React from 'react';
import Image from 'next/image';

import Logo1 from "../../public/img-assets/asSeen/Logo1-dark.svg";
import Logo2 from "../../public/img-assets/asSeen/Logo2-dark.svg";
import Logo3 from "../../public/img-assets/asSeen/Logo3-dark.svg";
import Logo4 from "../../public/img-assets/asSeen/Logo4.svg";
import Logo5 from "../../public/img-assets/asSeen/Logo5.svg";

import FadeIn from "@/components/FadeIn";

export default function AsSeen() {
    return (
        <section>
            <p className='uppercase text-sm text-center md:text-left mb-3'>
                As seen in
            </p>
            <div className="flex flex-row gap-5 items-center justify-center md:justify-start z-0">
                <div>
                    <FadeIn delay={0.2}>
                        <Image
                            className='transition duration-200 hover:opacity-100 w-24 h-auto opacity-60'
                            src={Logo3}
                            alt="Financial Times logo"
                        />
                    </FadeIn>
                </div>

                <div>
                    <FadeIn delay={0.4}>
                        <Image
                            className='transition duration-200 hover:opacity-100 w-24 h-auto opacity-60'
                            src={Logo1}
                            alt="Bloomberg logo"
                        />
                    </FadeIn>
                </div>

                <div>
                    <FadeIn delay={0.6}>
                        <Image
                            className='transition duration-200 hover:opacity-100 w-24 h-auto opacity-60'
                            src={Logo2}
                            alt="The Economist logo"
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}