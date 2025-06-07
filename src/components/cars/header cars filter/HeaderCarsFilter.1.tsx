import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import {
  resetSort,
  sortByHighPrice,
  sortByLowPrice,
  sortByNewYear,
  sortByOldYear,
} from '../../../features/rentCarFilters/sortByFilterSlice';

// مرتب‌سازی بر اساس

export function HeaderCarsFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('مرتب‌سازی بر اساس');
  const options = [
    'مرتب‌سازی بر اساس',
    'ارزان‌ترین',
    'گران‌ترین',
    'جدیدترین',
    'قدیمی‌ترین',
  ];

  const dispatch = useAppDispatch();

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(
    function () {
      if (selectedOption === 'گران‌ترین') dispatch(sortByHighPrice());
      if (selectedOption === 'ارزان‌ترین') dispatch(sortByLowPrice());
      if (selectedOption === 'جدیدترین') dispatch(sortByNewYear());
      if (selectedOption === 'قدیمی‌ترین') dispatch(sortByOldYear());
      if (selectedOption === 'مرتب‌سازی بر اساس') dispatch(resetSort())
    },
    [dispatch, selectedOption]
  );

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
        <ul className="absolute top-full left-0 z-30 mt-1 w-full rounded-md bg-white shadow-lg">
          {options.map((option) => (
            <li
              key={option}
              className={clsx(
                'cursor-pointer px-4 py-2 text-sm hover:bg-gray-100',
                selectedOption === option && 'font-semibold text-blue-600'
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
