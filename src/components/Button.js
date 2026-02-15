import React from 'react';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

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
      {children} <ArrowRight className="inline-block ml-2" size={16} />
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
