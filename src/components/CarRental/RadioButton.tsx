import React from 'react';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  label: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  value,
  checked,
  onChange,
  label,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="flex cursor-pointer items-center">
        <span className="ml-2 text-sm text-gray-700">{label}</span>
        <div className="relative flex items-center">
          <input
            type="radio"
            name={name}
            value={value}
            checked={checked}
            onChange={() => onChange(value)}
            className="h-5 w-5 appearance-none rounded-full border border-gray-400 transition-all checked:border-blue-700 checked:bg-blue-700 focus:ring-2 focus:ring-blue-300"
          />
          <div
            className={`pointer-events-none absolute top-0 left-0 h-5 w-5 rounded-full border border-gray-400 ${checked ? 'border-blue-700 bg-blue-700' : 'bg-white'}`}
          ></div>
          {checked && (
            <div className="absolute top-1 left-1 h-3 w-3 rounded-full bg-white" />
          )}
        </div>
      </label>
    </div>
  );
};
