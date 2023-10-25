import Link from 'next/link';
import React from 'react';

type LogoProps = {
  children: React.ReactNode;
  to: string;
};

export const Logo: React.FC<LogoProps> = ({ children, to }) => {
  return (
    <h1 className="font-inter font-bold">
      <Link className="btn btn-ghost text-xl normal-case" href={to}>
        {children}
      </Link>
    </h1>
  );
};
