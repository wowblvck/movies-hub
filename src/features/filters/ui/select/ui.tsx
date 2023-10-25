import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectOption } from '../../types';

type SelectProps = {
  options: SelectOption[];
  onSelect: (value: string) => void;
} & React.HTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = ({ options, onSelect, ...props }) => {
  const { className } = props;
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <select
      className={twMerge('select select-bordered md:max-w-xs', className)}
      onChange={handleSelect}
    >
      {options.map((option) => (
        <option key={option.label} value={option.value} className="font-roboto font-normal">
          {option.label}
        </option>
      ))}
    </select>
  );
};
