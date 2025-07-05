import React from 'react';
import { toPersianNumbers } from '../../../utils/toPersianNumbers';

interface PayBtnProps {
  totalAmount: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
}

const PayBtn: React.FC<PayBtnProps> = ({
  totalAmount,
  isDisabled = false,
  isLoading = false,
  onClick,
  className = '',
}) => {
  const baseStyles = `
    flex h-12 w-full max-w-[472px] cursor-pointer items-center justify-center 
    rounded px-3 text-center text-[18px] font-bold text-white 
    transition-all duration-200 focus:ring-2 focus:ring-green-500 
    focus:ring-offset-2 focus:outline-none 
    md:h-[58px] md:px-[14px] md:text-[20px] lg:text-[22px]
  `;

  const disabledStyles = 'cursor-not-allowed bg-gray-400';
  const enabledStyles = 'bg-[#269E22] hover:bg-[#1e7a1c] active:bg-[#156018]';
  const loadingStyles = 'cursor-not-allowed bg-[#269E22] opacity-70';

  const getButtonStyles = () => {
    if (isLoading) return `${baseStyles} ${loadingStyles}`;
    if (isDisabled) return `${baseStyles} ${disabledStyles}`;
    return `${baseStyles} ${enabledStyles}`;
  };

  const getButtonContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          <span>در حال پردازش...</span>
        </div>
      );
    }
    return `قابل پرداخت ${toPersianNumbers(totalAmount)} تومان`;
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={`${getButtonStyles()} ${className}`}
      aria-label={`پرداخ�� مبلغ ${toPersianNumbers(totalAmount)} تومان`}
    >
      {getButtonContent()}
    </button>
  );
};

export default PayBtn;
