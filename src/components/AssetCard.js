import React from 'react';

const AssetCard = (props) => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>
                <i className={props.iconClass}></i> {props.title}
            </h2>
            <p>
                {props.body}
            </p>
        </div>
    );
};

export default AssetCard;