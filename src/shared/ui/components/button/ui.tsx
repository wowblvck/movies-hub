import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, children, className, ...props }, ref) => {
    return (
      <button className={twMerge('btn', className)} ref={ref} disabled={loading} {...props}>
        {loading ? (
          <>
            <span className="loading loading-spinner" />
            Загружаем...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
