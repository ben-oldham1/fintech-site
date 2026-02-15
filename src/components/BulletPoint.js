import React from 'react';
import { Check } from "lucide-react";

const BulletPoint = (props) => {
    return (
        <>
            <p className='text-xl font-bold'>
                <Check className="text-orange inline-block pe-2" />
                {props.text}
            </p>
        </>
    );
};

export default BulletPoint;