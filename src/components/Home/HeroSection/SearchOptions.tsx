import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiCalendar, FiClock, FiMapPin, FiChevronDown } from 'react-icons/fi';

const SearchOptions: React.FC = () => {
  return (
    <div className="relative z-10 mt-12 w-full max-w-[1223px] rounded-2xl border border-[#D7D7D7] bg-white px-6 py-6 backdrop-blur-[27.65px] md:mt-[47px] md:ml-0">
      {/* Top row: 'اطلاعات بیشتر' and rental types */}
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="text-sm font-normal text-[#194BF0]">
          اطلاعات بیشتر در مورد رزرو خودرو
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex h-10 items-center justify-center rounded-[20px] border border-[#D7D7D7] px-3 py-1 text-sm font-bold text-[#0C0C0C]">
            اجاره ماشین عروس
          </div>
          <div className="flex h-10 items-center justify-center rounded-[20px] border border-[#D7D7D7] px-3 py-1 text-sm font-bold text-[#0C0C0C]">
            اجاره خودرو بی راننده
          </div>
          <div className="flex h-10 items-center justify-center rounded-[20px] border border-[#D7D7D7] px-3 py-1 text-sm font-bold text-[#0C0C0C]">
            اجاره خودرو با راننده
          </div>
        </div>
      </div>

      {/* Middle row: Selection options */}
      <div className="mt-4 flex flex-wrap items-center justify-end gap-10 md:gap-10">
        <div className="flex items-center gap-1">
          <span className="text-sm text-[#0C0C0C]">محل تحویل خودرو</span>
          <FiChevronDown className="text-[#0C0C0C]" size={16} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-[#0C0C0C]">تاریخ تحویل</span>
          <FiChevronDown className="text-[#0C0C0C]" size={16} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-[#0C0C0C]">ساعت تحویل</span>
          <FiChevronDown className="text-[#0C0C0C]" size={16} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-[#0C0C0C]">تاریخ بازگشت</span>
          <FiChevronDown className="text-[#0C0C0C]" size={16} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm text-[#0C0C0C]">ساعت بازگشت</span>
          <FiChevronDown className="text-[#0C0C0C]" size={16} />
        </div>
      </div>

      {/* Search Form */}
      <div className="mt-4 flex w-full flex-col items-center justify-between gap-3 rounded-2xl border border-[#F3F3F3] bg-white p-3 md:flex-row">
        {/* Time 1 */}
        <div className="flex w-full items-center justify-between gap-2 md:w-auto">
          <FiClock className="text-[#727272]" size={16} />
          <span className="text-base text-[#0C0C0C]">07:00</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#D7D7D7] md:h-8 md:w-px"></div>

        {/* Date 1 */}
        <div className="flex w-full items-center justify-between gap-2 md:w-auto">
          <FiCalendar className="text-[#727272]" size={16} />
          <span className="text-base text-[#0C0C0C]">1403٫02٫10</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#D7D7D7] md:h-8 md:w-px"></div>

        {/* Time 2 */}
        <div className="flex w-full items-center justify-between gap-2 md:w-auto">
          <FiClock className="text-[#727272]" size={16} />
          <span className="text-base text-[#0C0C0C]">07:00</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#D7D7D7] md:h-8 md:w-px"></div>

        {/* Date 2 */}
        <div className="flex w-full items-center justify-between gap-2 md:w-auto">
          <FiCalendar className="text-[#727272]" size={16} />
          <span className="text-base text-[#0C0C0C]">1403٫02٫10</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#D7D7D7] md:h-8 md:w-px"></div>

        {/* Location */}
        <div className="flex w-full flex-1 items-center justify-between gap-2 md:order-first">
          <FiChevronDown className="text-[#868686]" size={16} />
          <span className="text-base text-[#0C0C0C]">
            تهران-فرودگاه امام خمینی
          </span>
        </div>

        {/* Search Button */}
        <div className="flex h-14 w-full items-center justify-center rounded-2xl bg-[#FDB713] md:w-14">
          <FiSearch className="text-[#212121]" size={16} />
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;
