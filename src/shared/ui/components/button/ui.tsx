import React from 'react';

type ButtonProps = {
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, children, ...props }, ref) => {
    return (
      <button className="btn" ref={ref} disabled={loading} {...props}>
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
