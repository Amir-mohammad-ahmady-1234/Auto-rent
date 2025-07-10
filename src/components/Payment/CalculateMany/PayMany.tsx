import React from 'react';
import { PayBtn } from '../Rules accept and pat btn';
import { useDepositPrice } from '../../../context/price deposit/useDepositPrice';

interface PaymentOption {
  id: string;
  label: string;
  description?: string;
}

interface PayManyProps {
  totalAmount?: string;
  onPaymentOptionChange?: (selectedOption: string) => void;
  onPaymentSubmit?: () => void;
}

const PayMany: React.FC<PayManyProps> = ({
  onPaymentOptionChange,
  onPaymentSubmit,
}) => {
  const { selectedOption, setSelectedOption } = useDepositPrice();

  const paymentOptions: PaymentOption[] = [
    {
      id: 'reservation_only',
      label: 'مایلم تمام مبلغ رو  همینجا پرداخت نمایم.',
    },
    {
      id: 'defer_deposit',
      label: 'مایلم ودیعه ها را بعدا پرداخت کنم.',
    },
    {
      id: 'cash_and_check',
      label:
        'مایلم نصف ودیعه را اینجا و نصف دیگر را با چپ بلند مدت پرداخت کنم.',
    },
  ];

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    onPaymentOptionChange?.(optionId);
  };

  const handlePaymentSubmit = () => {
    if (selectedOption) {
      onPaymentSubmit?.();
    }
  };

  const CheckboxIcon: React.FC<{ isSelected: boolean }> = ({ isSelected }) => (
    <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-[#C2C2C2] bg-white">
      {isSelected && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5L6 12L2.5 8.5"
            stroke="#269E22"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );

  return (
    <div className="payment-options-container mx-auto flex w-full flex-col items-center justify-center gap-4 overflow-x-auto border-dashed border-[#AEAEAE] bg-white p-5 font-['Estedad'] shadow-sm md:gap-6 md:p-8 lg:min-h-[350px] lg:rounded-l-2xl lg:rounded-r-none lg:border-r">
      {/* Payment Options */}
      <div className="flex w-full flex-col items-end gap-6">
        <div className="flex w-full flex-col items-end gap-2.5">
          {/* Payment Options Mapping */}
          {paymentOptions.slice(0, 2).map((option) => (
            <label
              key={option.id}
              className="flex w-full cursor-pointer items-center justify-end gap-3 px-2 py-1 transition-colors hover:bg-gray-50 md:px-4"
              htmlFor={option.id}
            >
              <p
                className={`text-right text-sm leading-relaxed text-[#727272] md:text-base ${
                  option.id === 'cash_and_check'
                    ? 'w-full max-w-[430px]'
                    : 'flex-1'
                }`}
              >
                {option.label}
              </p>
              <input
                type="radio"
                id={option.id}
                name="paymentOption"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
                className="sr-only"
                aria-describedby={
                  option.id === 'cash_and_check' ? 'deposit-info' : undefined
                }
              />
              <CheckboxIcon isSelected={selectedOption === option.id} />
            </label>
          ))}
        </div>

        {/* Information Text */}
        <div
          id="deposit-info"
          className="flex-1 px-2 text-right text-sm leading-relaxed text-[#9A9A9A] md:px-4 md:text-base"
          role="note"
        >
          ودیعه تا حداکثر مبلغ 150,000,000 تومان با توجه به مدارک ارائه شده از
          طرف شما متفاوت خواهد بود.
        </div>

        {/* Payment Option 3 */}
        <label
          className="flex w-full cursor-pointer items-center justify-end gap-3 px-2 py-1 transition-colors hover:bg-gray-50 md:px-4"
          htmlFor={paymentOptions[2].id}
        >
          <p className="w-full max-w-[430px] text-right text-sm leading-relaxed text-[#727272] md:text-base">
            {paymentOptions[2].label}
          </p>
          <input
            type="radio"
            id={paymentOptions[2].id}
            name="paymentOption"
            value={paymentOptions[2].id}
            checked={selectedOption === paymentOptions[2].id}
            onChange={() => handleOptionSelect(paymentOptions[2].id)}
            className="sr-only"
          />
          <CheckboxIcon isSelected={selectedOption === paymentOptions[2].id} />
        </label>
      </div>

      {/* Payment Button */}
      <PayBtn isDisabled={!selectedOption} onClick={handlePaymentSubmit} />
    </div>
  );
};

export default PayMany;
