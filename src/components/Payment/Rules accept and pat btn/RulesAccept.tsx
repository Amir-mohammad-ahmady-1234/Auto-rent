import React from 'react';
import PayAllManyBtn from './PayAllManyBtn';

interface RulesAcceptProps {
  isAccepted: boolean;
  onAcceptChange: (accepted: boolean) => void;
  onViewRules?: () => void;
  className?: string;
  'data-testid'?: string;
}

// Reusable icon components for better DRY principles
const CheckIcon: React.FC = () => (
  <svg
    className="h-4 w-4 text-white"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const DocumentIcon: React.FC = () => (
  <svg
    className="h-6 w-6 text-[#1371F4]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

// Reusable checkbox component
const CustomCheckbox: React.FC<{
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
  testId?: string;
}> = ({ checked, onChange, ariaLabel, testId = 'custom-checkbox' }) => (
  <label className="relative inline-flex cursor-pointer" aria-label={ariaLabel}>
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      className="sr-only"
      data-testid={`${testId}-input`}
    />
    <div
      className={`flex h-6 w-6 items-center justify-center rounded-lg border transition-all duration-200 ${
        checked
          ? 'scale-105 transform border-[#FDB713] bg-[#FDB713]'
          : 'border-[#C2C2C2] bg-white hover:border-gray-400'
      }`}
      data-testid={testId}
    >
      {checked && <CheckIcon />}
    </div>
  </label>
);

const RulesAccept: React.FC<RulesAcceptProps> = ({
  isAccepted,
  onAcceptChange,
  onViewRules,
  className = '',
  'data-testid': testId = 'rules-accept',
}) => {

  

  return (
    <div
      dir="ltr"
      className={`flex flex-col items-end justify-center px-4 py-4 sm:px-6 sm:py-6 ${className}`}
      data-testid={testId}
    >
      <div className="flex w-full flex-col items-stretch justify-center">
        {/* Title Section */}
        <h2 className="text-right font-['Estedad-FD'] text-xl leading-[34px] font-bold text-[#353535] sm:text-2xl">
          شروط و تعهدات طرفین
        </h2>
        {/* Decorative Line */}
        <div className="mt-1 flex w-full items-center justify-end">
          <div className="h-px min-w-[120px] flex-1 rounded bg-[#D7D7D7] sm:min-w-[240px]" />
          <div className="h-[3px] w-[60px] rounded-lg bg-[#FDB713] sm:w-[93px]" />
        </div>
      </div>

      {/* Checkbox Section */}
      <div className="mt-4 flex w-full items-center justify-end gap-3">
        <span className="font-['Estedad-FD'] text-sm leading-[25px] font-normal text-[#727272]">
          .شروط و تعهدات طرفین قرارداد را قبول دارم
        </span>
        <CustomCheckbox
          checked={isAccepted}
          onChange={onAcceptChange}
          ariaLabel="قبول شروط و تعهدات"
          testId="rules-checkbox"
        />
      </div>

      {/* View Rules Link Section */}
      <div className="mt-2 flex w-full items-center justify-end gap-2">
        <button
          onClick={onViewRules}
          className="focus:ring-opacity-50 cursor-pointer rounded text-right font-['Estedad-FD'] text-sm leading-[25px] font-bold text-[#1371F4] transition-all duration-200 hover:scale-105 hover:text-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          aria-label="مشاهده متن شروط و تعهدات"
          data-testid="view-rules-button"
        >
          متن شروط و تعهدات طرفین
        </button>
        <span className="flex h-6 w-6 items-center justify-center">
          <DocumentIcon />
        </span>
      </div>
      <PayAllManyBtn isRulsAccept={isAccepted} />
    </div>
  );
};

export default RulesAccept;
