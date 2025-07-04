import React from 'react';
import { PriceRow } from './PriceRow';

// Type definitions for price calculation items
interface PriceItem {
  label: string;
  amount: string;
}

interface CalculateManyProps {
  dailyCost?: string;
  pickupDelivery?: string;
  returnDelivery?: string;
  tax?: string;
  totalCost?: string;
  deposit?: string;
  licenseDeposit?: string;
  totalWithDeposit?: string;
}

// Default values for demonstration
const defaultProps: Required<CalculateManyProps> = {
  dailyCost: '25,500,000',
  pickupDelivery: '585,000',
  returnDelivery: '585,000',
  tax: '3,685,510',
  totalCost: '30,355,510',
  deposit: '150,000,000',
  licenseDeposit: '0',
  totalWithDeposit: '180,355,510',
};

const CalculateMany: React.FC<CalculateManyProps> = (props) => {
  const {
    dailyCost,
    pickupDelivery,
    returnDelivery,
    tax,
    totalCost,
    deposit,
    licenseDeposit,
    totalWithDeposit,
  } = { ...defaultProps, ...props };

  const priceItems: PriceItem[] = [
    { label: 'هزینه روزانه', amount: dailyCost },
    { label: 'تحویل در محل مبدا', amount: pickupDelivery },
    { label: 'تحویل در محل بازگشت', amount: returnDelivery },
    { label: 'مالیات', amount: tax },
    { label: 'مجموع هزینه', amount: totalCost },
    { label: 'ودیعه', amount: deposit },
    { label: 'ودیعه راهنمایی رانندگی', amount: licenseDeposit },
    { label: 'مجموع هزینه بهمراه ودیعه', amount: totalWithDeposit },
  ];

  return (
    <div
      dir="ltr"
      className="flex max-w-[705px] flex-col overflow-hidden rounded-r-2xl border-l border-dashed border-[#AEAEAE] bg-white p-4 md:p-6 lg:h-[350px]"
    >
      {/* Header Section */}
      <div className="flex w-full flex-col items-stretch justify-center">
        <h2 className="text-right text-2xl leading-[34px] font-bold text-[#353535] md:text-xl">
          محاسبه قیمت
        </h2>

        {/* Progress Bar */}
        <div className="mt-1 flex w-full flex-wrap items-center justify-end gap-[-3px]">
          <div className="h-px min-w-[240px] flex-1 rounded bg-[#D7D7D7]" />
          <div className="h-[3px] w-[93px] rounded-lg bg-[#FDB713]" />
        </div>
      </div>

      {/* Price Items */}
      <div className="mt-1 w-full text-xs leading-[22px] text-[#353535]">
        {priceItems.map((item, index) => (
          <PriceRow
            key={index}
            label={item.label}
            amount={item.amount}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

// Individual price row component
export interface PriceRowProps {
  label: string;
  amount: string;
  isFirst?: boolean;
}

export default CalculateMany;
