import React from 'react';
import Link from 'next/link';

export default function ArticleCard(props) {
    const articleData = props.articleData;

    return (
        <Link href={'/learn/article'}>
            <div className='border-dark border-2 rounded hover:bg-gray-light h-full p-3'>
                <p className='text-dark text-xs mb-2'>{articleData.date}</p>
                <h2 className='text-dark text-xl font-bold mb-1'>{articleData.title}</h2>
                <p className='text-dark text-sm'>{articleData.topic}</p>
            </div>
        </Link>
    )
}