import React from 'react';

interface FormInputProps {
  type: 'location' | 'date' | 'time';
  label?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  icon,
}) => {
  return (
    <div className="flex h-12 w-full items-center rounded-lg border border-gray-300 bg-white px-3 transition-all focus-within:border-blue-700">
      {icon && <div className="ml-2">{icon}</div>}
      <div className="flex flex-1 flex-col">
        {label && <span className="mb-1 text-xs text-gray-500">{label}</span>}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-right text-base placeholder-gray-400 outline-none"
        />
      </div>
    </div>
  );
};
