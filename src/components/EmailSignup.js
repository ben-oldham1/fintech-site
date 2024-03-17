import React from 'react';
import Button from '@/ui/Button';

function EmailSignup() {

    return (
        <div className='flex flex-auto'>
            <input className="border-light bg-dark text-light border-2 rounded py-1 px-3 me-2" type="email" placeholder="Your email" />

            <Button variant="light">
                Sign up
            </Button>
        </div>
    );
}

export default EmailSignup;