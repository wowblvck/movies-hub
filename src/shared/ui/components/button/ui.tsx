import React from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { cn } from '@/shared/lib';

type ButtonProps = {
  loading?: boolean;
  loadingPlaceholder?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ loading, children, className, loadingPlaceholder, ...props }, ref) => {
    return (
      <button className={cn('btn', className)} ref={ref} disabled={loading} {...props}>
        {loading ? (
          <>
            <span className="loading loading-spinner" />
            {loadingPlaceholder ? loadingPlaceholder : 'Загружаем...'}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';
