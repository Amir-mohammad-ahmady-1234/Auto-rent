import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { filterByPrice } from '../../../features/rentCarFilters/headerCarsFilterSlice';


export function HeaderPriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState('تقویم قیمتی');
  const priceRanges = [
    'تقویم قیمتی',
    '5000000',
    '5000000,10000000',
    '10000000,15000000',
    '15000000',
  ];

  const dispatch = useAppDispatch();

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelect = (range: string) => {
    setSelectedRange(range);
    setIsOpen(false);
  };

  useEffect(
    function () {
      dispatch(filterByPrice(selectedRange));
    },
    [selectedRange, dispatch]
  );

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
        <ul className="absolute top-full left-0 z-30 mt-1 w-full rounded-md bg-white shadow-lg">
          {priceRanges.map((range) => (
            <li
              key={range}
              className={clsx(
                'cursor-pointer px-4 py-2 text-sm hover:bg-gray-100',
                selectedRange === range && 'font-semibold text-blue-600'
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
