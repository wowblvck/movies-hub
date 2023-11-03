import React from 'react';
// eslint-disable-next-line @conarti/feature-sliced/absolute-relative
import { cn } from '@/shared/lib';
import { SelectOption } from './types';

type SelectProps = {
  options: SelectOption[];
  value?: string | (string | null)[] | null;
  optionSelect?: (value: string) => void;
} & React.HTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, optionSelect, value, className, ...props }, ref) => {
    const selected = options.find((option) => option?.value === value) ?? options[0];

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (optionSelect) {
        optionSelect(event.target.value);
      }
    };

    return (
      <select
        ref={ref}
        className={cn('select select-bordered', className)}
        defaultValue={selected.value}
        onChange={handleSelect}
        {...props}
      >
        {options.map((option) => {
          return (
            <option
              key={option.label}
              value={option.value}
              disabled={option.disabled}
              className="font-roboto font-normal"
            >
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
);
Select.displayName = 'Select';
