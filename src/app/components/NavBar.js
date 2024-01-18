"use client"

import React from 'react';

import Button from '@/app/ui/Button'

const Navbar = () => {
    return (
        <nav className="bg-gray-dark p-3">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-light text-2xl font-semibold">TradeEase</div>

                {/* Navigation links */}
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