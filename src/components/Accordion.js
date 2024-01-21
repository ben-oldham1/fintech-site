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
                        className="bg-gray-200 p-2 cursor-pointer"
                        onClick={() => handleToggle(index)}
                    >
                        <h3 className="text-lg font-semibold"><i class="bi bi-plus"></i> {item.title}</h3>
                    </div>
                    {activeIndex === index && (
                        <div className="bg-white p-2">
                            <p className="text-gray-700">{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
