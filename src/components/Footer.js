import React from 'react';

import Image from 'next/image';
import CopyrightLabel from "@/components/CopyrightLabel";
import EmailSignup from "@/components/EmailSignup";

const Footer = () => {
    return (
        <footer className="bg-dark p-3">
            <div className="m-5">

                <div className='mb-10'>
                    <h2 className="text-light text-2xl font-semibold">TradeEase</h2>
                    <p className="text-light font-light">Your future, simplified</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-y-5 text-md mb-3">
                    <div className="flex flex-row flex-wrap gap-5 text-light">
                        <Image src={'/img-assets/app-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
                        <Image src={'/img-assets/play-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
                    </div>

                    <EmailSignup variant="dark" />
                </div>

                <div className="flex flex-row justify-center">
                    <CopyrightLabel />
                </div>

            </div>
        </footer>
    );
};

export default Footer;