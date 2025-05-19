const RentSteps = () => {
  return (
    <div className="w-full max-w-[1256px] self-start md:max-w-full">
      <div className="flex gap-5 md:flex-col md:items-stretch md:gap-0">
        <div className="ml-0 flex w-1/3 flex-col items-stretch leading-normal md:ml-0 md:w-full">
          <div className="mt-1 flex w-full flex-col font-[Estedad-FD] md:mt-10">
            <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] self-start border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:text-[40px]">
              2
            </div>
            <div className="flex items-center justify-center gap-4 self-end">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3e67044ce820ba13de7347c6f7eea34d8906652?placeholderIfAbsent=true"
                className="my-auto aspect-square w-20 flex-shrink-0 self-stretch object-contain object-center"
                alt="Step 2 icon"
              />
              <div className="my-auto min-h-[92px] w-[260px] min-w-[240px] self-stretch">
                <div className="text-right text-2xl leading-[1.4] font-bold text-[#212121]">
                  <span className="text-[#d79c10]">تاریخ</span> تحویل را تعیین
                  کنید.
                </div>
                <div className="mt-2 flex-1 text-justify text-base font-medium text-[#5E5E5E]">
                  تاریخ موردنظر خود را از تقویم، انتخاب و رزرو کنید
                </div>
              </div>
            </div>
            <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] mt-[379px] self-start border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:mt-10 md:text-[40px]">
              4
            </div>
            <div className="flex items-center justify-center gap-4 self-end md:mr-[2px]">
              <div className="my-auto flex h-20 w-20 flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white"></div>
              <div className="my-auto min-h-[92px] w-[258px] min-w-[240px] self-stretch">
                <div className="text-right text-2xl leading-[1.4] font-bold text-[#212121]">
                  <span className="text-[#d79c10]">خودرو</span> را دریافت کنید.
                </div>
                <div className="mt-2 flex-1 text-justify text-base font-medium text-[#5E5E5E]">
                  در زمان و مکان تعیین شده، خودروی خود را دریافت کنید.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-5 flex w-1/3 flex-col items-stretch leading-normal md:ml-0 md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3a145e7f54f10e82286a963f26442504902385d?placeholderIfAbsent=true"
            className="mt-[31px] aspect-[0.43] w-full flex-grow object-contain object-center md:mt-10"
            alt="Rental process illustration"
          />
        </div>
        <div className="ml-5 flex w-1/3 flex-col items-stretch leading-normal md:ml-0 md:w-full">
          <div className="flex w-full flex-col items-stretch font-[Estedad-FD] md:mt-10">
            <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] mr-[58px] self-end border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:mr-[10px] md:text-[40px]">
              1
            </div>
            <div className="flex items-center justify-center gap-4 md:mr-[9px]">
              <div className="my-auto flex min-h-[92px] w-[270px] min-w-[240px] flex-col items-stretch justify-start self-stretch">
                <div className="text-center text-2xl leading-[1.4] font-bold text-[#212121]">
                  <span className="text-[#d79c10]">خودروی</span> خود را انتخاب
                  کنید.
                </div>
                <div className="mt-2 flex-1 self-end text-justify text-base font-medium text-[#5E5E5E]">
                  خودروی مورد نظر خود را، متناسب با درخواست خود انتخاب کنید.
                </div>
              </div>
              <div className="my-auto flex h-20 w-20 flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white"></div>
            </div>
            <div className="-webkit-text-stroke-width-[1px] -webkit-text-stroke-color-[#0B2FA6] mt-[392px] self-end border border-solid border-[#0B2FA6] text-center text-[152px] leading-[1] font-bold md:mt-10 md:text-[40px]">
              3
            </div>
            <div className="flex items-center justify-center gap-4 md:mr-[9px] md:ml-[3px]">
              <div className="my-auto flex min-h-[117px] w-[267px] min-w-[240px] flex-col items-stretch justify-start self-stretch">
                <div className="text-right text-2xl leading-[1.4] font-bold text-[#212121]">
                  <span className="text-[#d79c10]">هزینه</span> اجاره را پرداخت
                  کنید.
                </div>
                <div className="mt-2 flex-1 self-end text-justify text-base font-medium text-[#5E5E5E]">
                  می توانید از طریق کیف پول آنلاین یا کارت های عضو شبکه شتاب
                  هزینه اجاره را پرداخت کنید.
                </div>
              </div>
              <div className="my-auto flex h-20 w-20 flex-shrink-0 self-stretch rounded-2xl border border-[#D7D7D7] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentSteps;
