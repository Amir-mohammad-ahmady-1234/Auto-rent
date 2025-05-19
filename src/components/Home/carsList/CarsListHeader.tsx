const CarsListHeader = () => {
  return (
    <div className="mt-12 w-full max-w-[1200px] px-4 sm:px-2 md:mt-10 md:max-w-full">
      <div className="flex gap-5 md:flex-col md:items-stretch md:gap-0">
        <div className="ml-0 flex w-[18%] flex-col items-stretch leading-normal md:ml-0 md:w-full">
          <div className="mt-[125px] flex min-h-12 flex-grow items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-center font-[Estedad-FD] text-lg leading-8 font-semibold text-[#194BF0] capitalize sm:text-base md:mt-10">
            <div className="my-auto flex h-5 w-5 flex-shrink-0 self-stretch"></div>
            <div className="my-auto self-stretch text-[#194BF0]">
              مشاهده همه
            </div>
          </div>
        </div>
        <div className="ml-5 flex w-[82%] flex-col items-stretch leading-normal md:ml-0 md:w-full">
          <div className="flex w-full flex-col items-stretch text-center font-[Estedad-FD] md:mt-1 md:max-w-full">
            <div className="flex flex-col items-center justify-center capitalize md:max-w-full">
              <div className="flex w-[845px] max-w-full flex-col items-center justify-center">
                <div className="text-2xl leading-[43px] font-extralight text-[#5E5E5E] sm:text-xl sm:leading-[32px]">
                  مشاهده موجودی خودروها{' '}
                </div>
                <div className="mt-2 text-[32px] leading-[58px] font-extrabold text-[#D79C10] sm:text-2xl sm:leading-[40px] md:max-w-full">
                  <span className="text-[#353535]">رزرو خودرو در </span>{' '}
                  اُتـــورِنت
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 self-center text-sm font-medium whitespace-nowrap text-[#194BF0] sm:flex-wrap sm:justify-center md:whitespace-normal">
              <div className="my-auto min-h-12 w-32 gap-2 self-stretch overflow-hidden rounded-lg border border-[#194BF0] px-4 py-3 text-[#194BF0] sm:w-28 sm:text-xs md:whitespace-normal">
                اقتصادی
              </div>
              <div className="my-auto min-h-12 w-32 gap-2 self-stretch overflow-hidden rounded-lg border border-[#194BF0] px-4 py-3 text-[#194BF0] sm:w-28 sm:text-xs md:whitespace-normal">
                لوکس
              </div>
              <div className="my-auto min-h-12 w-32 gap-2 self-stretch overflow-hidden rounded-lg bg-[#194BF0] px-4 py-3 text-white sm:w-28 sm:text-xs md:whitespace-normal">
                پرطرفدار
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsListHeader;
