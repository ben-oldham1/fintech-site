"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

import Button from '@/ui/Button'

const Navbar = () => {
    const pathname = usePathname()

    console.log(pathname)

    return (
        <nav className="bg-dark sticky top-0 p-3">
            <div className="flex justify-between items-center mx-5">

                <Link href="/">
                    <div className="text-light text-2xl font-semibold">TradeEase</div>
                </Link>

                <ul className="flex space-x-10 tracking-wide text-md">
                    <li><Link href="/features" className={`text-light hover:text-gray-light ${pathname.includes('/features') ? 'font-bold' : ''}`}>
                        Features
                    </Link></li>
                    <li><Link href="/learn" className={`text-light hover:text-gray-light ${pathname.includes('/learn') ? 'font-bold' : ''}`}>
                        Learn
                    </Link></li>
                    <li><Link href="/company" className={`text-light hover:text-gray-light ${pathname.includes('/company') ? 'font-bold' : ''}`}>
                        Company
                    </Link></li>
                </ul>

                <Button href={'https://www.benoldham.dev'}>
                    Download
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;