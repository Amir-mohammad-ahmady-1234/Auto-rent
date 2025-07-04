import type React from 'react';
import type { PriceRowProps } from './CalculateMany';
import { toPersianNumbers } from '../../../utils/toPersianNumbers';

export const PriceRow: React.FC<PriceRowProps> = ({
  label,
  amount,
  isFirst = false,
}) => {
  return (
    <div
      className={`flex w-full flex-wrap items-start justify-between gap-12 ${isFirst ? '' : 'mt-[13px]'} md:gap-10`}
    >
      <div className="flex-1 text-left text-[#353535]">{toPersianNumbers(amount)}</div>
      <div className="flex-1 text-right text-[#353535]">{label}</div>
    </div>
  );
};
