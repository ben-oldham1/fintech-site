"use client"

import { useState } from 'react';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="mb-2">
                    <div
                        className="bg-gray-200 p-2 cursor-pointer flex justify-between items-center"
                        onClick={() => handleToggle(index)}
                    >
                        <h3 className="text-2xl font-semibold">{item.title}</h3>
                        <i className={`bi ${activeIndex === index ? 'bi-dash' : 'bi-plus'}`}></i>
                    </div>
                    <div
                        className={`bg-white px-2 transition-all duration-300 ${activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                            } overflow-hidden`}
                    >
                        <p className="text-gray-700 text-lg">{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
