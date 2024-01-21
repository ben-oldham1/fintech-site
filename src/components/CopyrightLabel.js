import React from 'react';
import Link from 'next/link';

function CopyrightLabel() {

    return (
        <Link className="text-light" href={'https://www.benoldham.dev'}>
            <p><i className="bi bi-c-circle"></i> {new Date().getFullYear()} Ben Oldham</p>
        </Link>
    );
}

export default CopyrightLabel;