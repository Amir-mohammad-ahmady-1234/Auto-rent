import React from 'react';

interface PricingCardProps {
  period: string;
  price: string;
  duration: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  period,
  price,
  duration,
}) => {
  return (
    <div className="flex flex-1 flex-col gap-2 rounded-lg bg-gray-100 p-2">
      <div className="text-xs leading-[180%] font-normal text-black capitalize">
        {period}
      </div>
      <div className="flex-1 text-right text-base leading-[140%] font-bold text-blue-700">
        {price}
      </div>
      <div className="text-right text-xs leading-[180%] font-normal text-black capitalize">
        {duration}
      </div>
    </div>
  );
};
