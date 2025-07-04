import type React from 'react';
import { CheckmarkIcon } from './CheckmarkIcon';

// Data field component
export interface DataFieldProps {
  label: string;
  value: string;
}

export const DataField: React.FC<DataFieldProps> = ({ label, value }) => (
  <div className="font-iransans flex items-center justify-end gap-4 text-sm text-gray-700">
    <div className="flex flex-col gap-0.5 text-right">
      <span className="font-semibold text-[#353535]">{label}</span>
      <span className="text-xs text-[#727272]">{value}</span>
    </div>
    <CheckmarkIcon />
  </div>
);
