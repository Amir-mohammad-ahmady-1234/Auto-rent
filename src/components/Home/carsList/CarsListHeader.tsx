const CarsListHeader = () => {
  return (
    <div className="mx-auto mt-12 w-full max-w-[1200px] px-4 md:mt-10">
      <div className="flex flex-col items-center gap-5 md:flex-row md:items-stretch md:gap-0">
        <div className="mb-4 flex w-full flex-col items-stretch leading-normal md:mb-0 md:w-[18%]">
          <div className="flex min-h-12 flex-grow items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-2 text-center font-[Estedad-FD] text-base leading-8 font-semibold text-[#194BF0] capitalize">
            <div className="my-auto flex h-5 w-5 flex-shrink-0"></div>
            <div className="my-auto text-[#194BF0]">مشاهده همه</div>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch leading-normal md:ml-5 md:w-[82%]">
          <div className="flex w-full flex-col items-center text-center font-[Estedad-FD]">
            <div className="flex w-full flex-col items-center justify-center capitalize">
              <div className="flex w-full flex-col items-center justify-center">
                <div className="text-xl leading-[32px] font-extralight text-[#5E5E5E] sm:text-2xl sm:leading-[43px]">
                  مشاهده موجودی خودروها{' '}
                </div>
                <div className="mt-2 text-2xl leading-[40px] font-extrabold text-[#D79C10] sm:text-[32px] sm:leading-[58px]">
                  <span className="text-[#353535]">رزرو خودرو در </span>{' '}
                  اُتـــورِنت
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm font-medium whitespace-nowrap text-[#194BF0]">
              <div className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#194BF0] px-4 py-3 text-xs text-[#194BF0] sm:text-sm">
                اقتصادی
              </div>
              <div className="flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#194BF0] px-4 py-3 text-xs text-[#194BF0] sm:text-sm">
                لوکس
              </div>
              <div className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#194BF0] px-4 py-3 text-xs text-white sm:text-sm">
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
