import React from 'react';
import Link from 'next/link';

const Button = (props) => {
  const href = props.href;
  const variant = props.variant;
  const content = props.children;

  const buttonContent = (
    <button
      type='button'
      className='px-3 py-1 rounded bg-light hover:bg-gray-light text-gray-dark'
    >
      {content} <i className="icon bi-arrow-up-right"></i>
    </button>
  );

  return (
    href ? (
      <Link href={href}>
        {buttonContent}
      </Link>
    ) : (
      buttonContent
    )
  );
};

export default Button;
