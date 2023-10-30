import React from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectOption } from '../../types';

type SelectProps = {
  options: SelectOption[];
  value: string | (string | null)[] | null;
  optionSelect: (value: string) => void;
} & React.HTMLAttributes<HTMLSelectElement>;

export const Select: React.FC<SelectProps> = ({ options, optionSelect, value, ...props }) => {
  const { className } = props;

  const selected = options.find((option) => option?.value === value) ?? options[0];

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    optionSelect(event.target.value);
  };

  return (
    <select
      className={twMerge('select select-bordered md:max-w-xs', className)}
      defaultValue={selected.value}
      onChange={handleSelect}
    >
      {options.map((option) => {
        return (
          <option key={option.label} value={option.value} className="font-roboto font-normal">
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
