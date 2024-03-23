import React from 'react';
import Button from '@/components/Button';

function EmailSignup(props) {

    if (props.variant == "dark") {
        return (
            <div className='flex flex-row'>
                <input className="border-light bg-dark text-light border-2 rounded w-80 py-1 px-3 me-2" type="email" placeholder="Your email" />
    
                <Button variant="light">
                    Sign up
                </Button>
            </div>
        );
    }

    if (props.variant == "light") {
        return (
            <div className='flex flex-row'>
                <input className="border-dark bg-light text-dark border-2 rounded w-80 py-1 px-3 me-2" type="email" placeholder="Your email" />
    
                <Button variant="dark">
                    Sign up
                </Button>
            </div>
        );
    }

}

export default EmailSignup;