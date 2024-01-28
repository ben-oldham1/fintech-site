import React from 'react';
import Button from '@/ui/Button';

function EmailSignup() {

    return (
        <div>
            <input className="border-light bg-dark text-light border-2 rounded w-72 py-1 px-3 me-2" type="email" placeholder="Your email" />

            <Button variant="light">
                Sign up
            </Button>
        </div>
    );
}

export default EmailSignup;