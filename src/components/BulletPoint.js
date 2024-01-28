import React from 'react';

const BulletPoint = (props) => {
    return (
        <p className='text-xl font-bold'>
            <i class="bi bi-check-circle-fill text-orange"></i> {props.text}
        </p>
    );
};

export default BulletPoint;