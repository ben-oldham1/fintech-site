import React from 'react';

const StatCard = (props) => {
    const stat = props.stat;
    const desc = props.desc;

    return (
        <>
            <h3 className="text-5xl font-bold">{stat}</h3>
            <p className="text-2xl">{desc}</p>
        </>
    );
};

export default StatCard;