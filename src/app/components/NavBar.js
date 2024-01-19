"use client"

import React from 'react';

import Button from '@/app/ui/Button'

const Navbar = () => {
    return (
        <nav className="bg-dark sticky top-0 p-3">
            <div className="flex justify-between items-center mx-5">

                <div className="text-light text-2xl font-semibold">TradeEase</div>

                <ul className="flex space-x-10">
                    <li><a href="#" className="text-light hover:text-gray-light">Features</a></li>
                    <li><a href="#" className="text-light hover:text-gray-light">Learn</a></li>
                    <li><a href="#" className="text-light hover:text-gray-light">Company</a></li>
                </ul>

                <Button href={'https://www.benoldham.dev'}>
                    Download
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;