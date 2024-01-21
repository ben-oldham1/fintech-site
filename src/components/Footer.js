import React from 'react';

import Image from 'next/image';
import CopyrightLabel from "@/components/CopyrightLabel";

const Footer = () => {
    return (
        <footer className="bg-dark p-3">
            <div className="m-5">

                <div className='mb-10'>
                    <h2 className="text-light text-2xl font-semibold">TradeEase</h2>
                    <p className="text-light font-light">Your future, simplified</p>
                </div>

                <div class="flex flex-row gap-5 text-light">
                    <Image src={'/img-assets/app-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
                    <Image src={'/img-assets/play-store.svg'} width={0} height={0} style={{ width: 'auto', height: '40px' }} />
                </div>

                <div class="flex flex-row gap-5 justify-center">
                    <CopyrightLabel />
                </div>

            </div>
        </footer>
    );
};

export default Footer;