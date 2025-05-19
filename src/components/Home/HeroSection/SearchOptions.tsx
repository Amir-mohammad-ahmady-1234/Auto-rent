const SearchOptions = () => {
  return (
    <div className="relative z-10 mt-[47px] ml-0 flex w-full max-w-[1223px] flex-col items-center justify-start rounded-2xl border border-[#D7D7D7] bg-white px-6 py-6 backdrop-blur-[27.65px] md:mb-[10px] md:ml-[53px] md:w-full md:max-w-full">
      {/* Top row: 'اطلاعات بیشتر' and rental types */}
      <div className="flex w-full flex-wrap items-center justify-between gap-4 text-center font-[Estedad-FD] text-sm md:max-w-full md:gap-[40px_100px]">
        <div className="my-auto self-stretch font-medium text-[#194BF0]">
          اطلاعات بیشتر در مورد رزرو خودرو
        </div>
        <div className="my-auto flex min-w-full flex-wrap items-center justify-center gap-2 self-stretch leading-[25px] font-semibold text-[#0C0C0C] capitalize md:max-w-full md:min-w-[240px]">
          <div className="min-h-10 gap-[10px] rounded-[20px] border border-[#D7D7D7] px-3 py-1">
            اجاره ماشین عروس
          </div>
          <div className="min-h-10 gap-[10px] rounded-[20px] border border-[#D7D7D7] px-3 py-1">
            اجاره خودرو بی راننده
          </div>
          <div className="min-h-10 gap-[10px] rounded-[20px] border border-[#D7D7D7] bg-[#194BF0] px-3 py-1 text-white">
            اجاره خودرو با راننده
          </div>
        </div>
      </div>

      {/* Search Form - Adjusted for vertical stacking on small screens */}
      <div className="relative mt-4 flex w-full max-w-[1175px] flex-col items-center justify-center gap-3 self-end overflow-hidden rounded-2xl border border-[#F3F3F3] bg-white px-[14px] py-3 md:max-w-full md:flex-row md:justify-end">
        {/* Location */}
        <div className="z-0 my-auto flex w-full items-center justify-between gap-2 text-center font-[Estedad-FD] text-base leading-[29px] font-normal text-[#0C0C0C] capitalize md:w-[527px] md:min-w-[240px] md:flex-wrap md:justify-between">
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
          <div className="my-auto self-stretch">تهران-فرودگاه امام خمینی</div>
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Added placeholder for icon if needed */}
        </div>
        <div className="z-0 my-auto h-px w-full flex-shrink-0 border border-solid border-[#D7D7D7] bg-[#D7D7D7] md:h-8 md:w-0"></div>{' '}
        {/* Divider */}
        {/* Date 1 */}
        <div className="z-0 my-auto flex w-full items-center justify-between gap-2 text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#212121] md:w-[111px] md:justify-between md:gap-[18px] md:whitespace-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c72bfe452f463cd5decf7b159942396a8c51f8d?placeholderIfAbsent=true"
            className="my-auto aspect-square w-5 flex-shrink-0 self-stretch object-contain object-center"
            alt="Calendar icon"
          />
          <div className="my-auto self-stretch">1403٫02٫10</div>
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Placeholder for dropdown icon */}
        </div>
        <div className="z-0 my-auto h-px w-full flex-shrink-0 border border-solid border-[#D7D7D7] bg-[#D7D7D7] md:h-8 md:w-0"></div>{' '}
        {/* Divider */}
        {/* Time 1 */}
        <div className="z-0 my-auto flex w-full items-center justify-between gap-2 text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#212121] md:w-[106px] md:justify-between md:gap-[40px_50px] md:whitespace-normal">
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Placeholder for time icon */}
          <div className="my-auto self-stretch">07:00</div>
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Placeholder for dropdown icon */}
        </div>
        <div className="z-0 my-auto h-px w-full flex-shrink-0 border border-solid border-[#D7D7D7] bg-[#D7D7D7] md:h-8 md:w-0"></div>{' '}
        {/* Divider */}
        {/* Date 2 */}
        <div className="z-0 my-auto flex w-full items-center justify-between gap-2 text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#0C0C0C] md:w-[111px] md:justify-between md:gap-[18px] md:whitespace-normal">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c72bfe452f463cd5decf7b159942396a8c51f8d?placeholderIfAbsent=true"
            className="my-auto aspect-square w-5 flex-shrink-0 self-stretch object-contain object-center"
            alt="Calendar icon"
          />
          <div className="my-auto self-stretch">1403٫02٫10</div>
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Placeholder for dropdown icon */}
        </div>
        <div className="z-0 my-auto h-px w-full flex-shrink-0 border border-solid border-[#D7D7D7] bg-[#D7D7D7] md:h-8 md:w-0"></div>{' '}
        {/* Time 2 */}
        <div className="z-0 my-auto flex w-full items-center justify-between gap-2 text-center font-[Estedad-FD] text-base font-medium whitespace-nowrap text-[#0C0C0C] md:w-[106px] md:justify-between md:gap-[40px_50px] md:whitespace-normal">
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Placeholder for time icon */}
          <div className="my-auto self-stretch">07:00</div>
          <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>{' '}
          {/* Placeholder for dropdown icon */}
        </div>
        {/* Search Button */}
        <div className="z-0 flex h-12 min-h-[48px] w-full items-center justify-center gap-[10px] self-stretch rounded-2xl bg-[#FDB713] md:absolute md:bottom-0 md:left-0 md:h-14 md:min-h-[56px] md:w-14 md:self-start">
          <div className="my-auto flex min-h-6 w-6 self-stretch"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchOptions;
