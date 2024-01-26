"use client"

import { useEffect, useState } from 'react';

function ArticleContents() {
    const [headings, setHeadings] = useState([])

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
            .map((elem) => ({
                text: elem.innerText,
            }))
        setHeadings(elements)
    }, [])

    return (
        <nav>
            <p className='text-xl font-bold'>In this article</p>
            <ul>
                {headings.map(heading => (
                    <li key={heading.text}>
                        <a href='#'>{heading.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default ArticleContents