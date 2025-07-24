import React from 'react';
import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiChevronDown,
  FiX,
} from 'react-icons/fi';

interface SearchOptionsProps {
  isModal?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const SearchOptions: React.FC<SearchOptionsProps> = ({
  isModal = false,
  onClose,
  showCloseButton = true,
}) => {
  return (
    <div
      className={`${
        isModal
          ? ''
          : 'relative z-10 mt-10 w-full max-w-[1223px] rounded-2xl border border-[#D7D7D7] bg-white px-4 py-6 md:mt-12 md:px-6'
      }`}
    >
      {showCloseButton && onClose && (
        <div className="mb-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
          >
            <FiX size={24} className="text-[#0C0C0C]" />
          </button>
        </div>
      )}

      {/* Rental Info and Types */}
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <span className="text-sm text-[#194BF0]">
          اطلاعات بیشتر در مورد رزرو خودرو
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {[
            { text: 'اجاره ماشین عروس', active: false },
            { text: 'اجاره خودرو بی راننده', active: false },
            { text: 'اجاره خودرو با راننده', active: true },
          ].map((item) => (
            <div
              key={item.text}
              className={`flex h-9 items-center justify-center rounded-full border px-4 text-sm font-bold ${
                item.active
                  ? 'border-[#194BF0] bg-[#194BF0] text-white'
                  : 'border-[#D7D7D7] text-[#0C0C0C]'
              }`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Selection Options */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-6">
        {[
          'محل تحویل خودرو',
          'تاریخ تحویل',
          'ساعت تحویل',
          'تاریخ بازگشت',
          'ساعت بازگشت',
        ].map((item) => (
          <div key={item} className="flex items-center gap-1">
            <span className="text-sm text-[#0C0C0C]">{item}</span>
            <FiChevronDown size={16} className="text-[#0C0C0C]" />
          </div>
        ))}
      </div>

      {/* Search Form */}
      <div className="mt-6 flex w-full flex-col items-center gap-4 rounded-2xl border border-[#F3F3F3] bg-white p-4 md:flex-row md:justify-between">
        {/* Location */}
        <div className="flex w-full flex-1 items-center justify-between gap-2 md:order-first md:w-auto">
          <FiChevronDown size={16} className="text-[#868686]" />
          <span className="text-base text-[#0C0C0C]">
            تهران-فرودگاه امام خمینی
          </span>
        </div>

        <Divider />

        {/* Time & Date 1 */}
        <DateTime time="07:00" date="1403٫02٫10" />

        <Divider />

        {/* Time & Date 2 */}
        <DateTime time="07:00" date="1403٫02٫10" />

        <Divider />

        {/* Search Button */}
        <button className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#FDB713] md:w-12">
          <FiSearch size={16} className="text-[#212121]" />
        </button>
      </div>
    </div>
  );
};

const DateTime = ({ time, date }: { time: string; date: string }) => (
  <div className="flex w-full items-center justify-between gap-2 md:w-auto">
    <FiClock size={16} className="text-[#727272]" />
    <span className="text-base text-[#0C0C0C]">{time}</span>
    <FiCalendar size={16} className="ml-4 text-[#727272]" />
    <span className="text-base text-[#0C0C0C]">{date}</span>
  </div>
);

const Divider = () => (
  <div className="h-px w-full bg-[#D7D7D7] md:h-8 md:w-px"></div>
);

export default SearchOptions;
