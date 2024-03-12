import React from 'react';

const SectionHeader = (props) => {
    return (
        <div className='text-center mb-10 px-10'>
            <h1 className='text-4xl font-bold mb-5'>
                {props.header}
            </h1>
            
            {props.subtext && (
                <p className='text-lg sm:px-16 xl:px-64'>
                    {props.subtext}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;
