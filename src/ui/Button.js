import React from 'react';
import Link from 'next/link';

const Button = (props) => {
  const { href, variant, children } = props;
  const defaultVariant = variant || 'light'; // Default variant is light

  const variantClasses = {
    light: 'bg-light hover:bg-gray-light text-dark',
    dark: 'bg-dark hover:bg-dark text-gray-light',
    orange: 'bg-orange hover:bg-orange-dark text-light',
  };

  const buttonContent = (
    <button
      type='button'
      className={'px-5 py-2 rounded ' + variantClasses[defaultVariant]}
    >
      {children} <i className="icon bi-arrow-up-right"></i>
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
