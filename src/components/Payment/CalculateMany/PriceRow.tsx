import type React from 'react';
import type { PriceRowProps } from './CalculateMany';
import { formatNumber } from '../../../utils/formatNumber.1';

export const PriceRow: React.FC<PriceRowProps> = ({
  label,
  amount,
  isFirst = false,
}) => {
  return (
    <div
      className={`flex w-full items-start justify-between gap-4 md:gap-6 ${isFirst ? '' : 'mt-[13px]'}`}
    >
      <div className="flex-1 truncate text-left break-words text-[#353535]">
        {formatNumber(amount)}
      </div>
      <div className="flex-1 truncate text-right break-words text-[#353535]">
        {label}
      </div>
    </div>
  );
};
