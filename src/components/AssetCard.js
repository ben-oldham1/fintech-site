import React from 'react';

const AssetCard = (props) => {
    return (
        <div className='flex items-center gap-4'>
            <img src={"img-assets/assetIcons/" + props.icon + ".svg"} className='w-12' alt="" />
            <div>
                <h2 className='text-2xl font-bold'>
                    {props.title}
                </h2>
                <p>
                    {props.body}
                </p>
            </div>
        </div>
    );
};

export default AssetCard;