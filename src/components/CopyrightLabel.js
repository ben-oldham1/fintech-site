import React from 'react';
import Link from 'next/link';

function CopyrightLabel() {

    return (
        <Link className="text-light" href={'https://www.benoldham.dev'}>
            <p>&#169; {new Date().getFullYear()} Ben Oldham</p>
        </Link>
    );
}

export default CopyrightLabel;