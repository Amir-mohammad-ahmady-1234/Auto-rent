// HeaderCarsFilter.tsx
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import clsx from 'clsx';

// مرتب‌سازی بر اساس
export function HeaderCarsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('مرتب‌سازی بر اساس');
  const options = ['مرتب‌سازی بر اساس', 'ارزان‌ترین', 'گران‌ترین', 'جدیدترین', 'قدیمی‌ترین'];

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-[180px]">
      <button
        className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:border-gray-500"
        onClick={toggleDropdown}
      >
        <span className="truncate">{selectedOption}</span>
        <FaChevronDown className="ml-2 text-base" />
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-30 mt-1 w-full rounded-md bg-white shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className={clsx(
                'cursor-pointer px-4 py-2 text-sm hover:bg-gray-100',
                selectedOption === option && 'text-blue-600 font-semibold'
              )}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// تقویم قیمتی
export function HeaderPriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState('تقویم قیمتی');
  const priceRanges = ['تقویم قیمتی', 'کمتر از ۵,۰۰۰,۰۰۰', '۵,۰۰۰,۰۰۰ تا ۱۰,۰۰۰,۰۰۰', '۱۰,۰۰۰,۰۰۰ تا ۱۵,۰۰۰,۰۰۰', 'بیشتر از ۱۵,۰۰۰,۰۰۰'];

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (range: string) => {
    setSelectedRange(range);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-[260px]">
      <button
        className="flex w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:border-gray-500"
        onClick={toggleDropdown}
      >
        <span className="truncate">{selectedRange}</span>
        <FaChevronDown className="ml-2 text-base" />
      </button>

      {isOpen && (
        <ul className="absolute left-0 top-full z-30 mt-1 w-full rounded-md bg-white shadow-lg">
          {priceRanges.map((range) => (
            <li
              key={range}
              className={clsx(
                'cursor-pointer px-4 py-2 text-sm hover:bg-gray-100',
                selectedRange === range && 'text-blue-600 font-semibold'
              )}
              onClick={() => handleSelect(range)}
            >
              {range}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Wrapper for both filters
export default function FiltersWrapper() {
  return (
    <div className="flex flex-wrap items-center justify-end gap-4">
      <HeaderPriceFilter />
      <HeaderCarsFilter />
    </div>
  );
}
