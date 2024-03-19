"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Button from '@/ui/Button';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-dark z-10 sticky top-0 p-3">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-5">
                <div className='flex justify-between'>
                    <Link href="/">
                        <span className="text-light text-2xl font-semibold cursor-pointer">TradeEase</span>
                    </Link>

                    {/* Toggle button for smaller screens */}
                    <button
                        onClick={toggleNavbar}
                        className="text-light inline-flex p-2 rounded md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        {/* Icon for menu open/close */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link href="/">
                                <span className={`block py-2 pr-4 pl-3 text-light md:p-0 hover:text-gray-light ${pathname == '/' ? 'font-bold' : ''} cursor-pointer`}>Overview</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/features">
                                <span className={`block py-2 pr-4 pl-3 text-light md:p-0 hover:text-gray-light ${pathname == '/features' ? 'font-bold' : ''} cursor-pointer`}>Features</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/learn">
                                <span className={`block py-2 pr-4 pl-3 text-light md:p-0 hover:text-gray-light ${pathname == '/learn' ? 'font-bold' : ''} cursor-pointer`}>Learn</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/company">
                                <span className={`block py-2 pr-4 pl-3 text-light md:p-0 hover:text-gray-light ${pathname == '/company' ? 'font-bold' : ''} cursor-pointer`}>Company</span>
                            </Link>
                        </li>
                        <li className="mt-3 md:mt-0 md:ml-4">
                            <Button href="https://www.benoldham.dev">Download</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;