const FAQContent = () => {
  return (
    <div className="mt-14 flex w-full max-w-full flex-col items-center px-4 font-[Estedad-FD] md:mt-10">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <div className="text-xl font-normal text-[#5E5E5E] sm:text-2xl">
          پر تکرارترین سؤالاتی که پرسیدید
        </div>
        <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#353535] md:max-w-full">
          سؤالات <span className="text-[#d79c10]">متداول</span>
        </div>
      </div>
      <div className="mt-6 flex w-full flex-wrap items-start justify-center gap-6">
        <div className="my-auto w-full min-w-[240px] self-stretch overflow-hidden rounded-2xl md:w-[392px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1aabda2c2c47ba77c8da0035cb66f5ab24fdc6a4?placeholderIfAbsent=true"
            className="aspect-[0.85] w-full object-contain object-center"
            alt="FAQ illustration"
          />
        </div>
        <div className="my-auto w-full min-w-[240px] self-stretch font-[Estedad-FD] md:flex-1">
          <div className="flex w-full flex-wrap items-center justify-end gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4 text-right text-base font-medium text-[#353535]">
            <div className="my-auto self-stretch text-[#353535]">
              در صورت بروز نقص فنی برای خودرو چه اتفاقی می افتد؟
            </div>
            <div className="my-auto flex h-6 w-6 flex-shrink-0 self-stretch"></div>
          </div>
          <div className="mt-4 flex w-full flex-col items-start justify-start gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4">
            <div className="flex w-full items-center justify-end gap-2 text-right text-base font-medium text-[#353535]">
              <div className="my-auto flex h-6 w-[19px] flex-shrink-0"></div>
              <div className="flex-1">
                هزینه بنزین و کارواش در خودروهای اجاره ای به عهده کیست؟
              </div>
            </div>
            <div className="w-full text-justify text-sm leading-[25px] font-normal text-[#727272] capitalize">
              در زمان اجاره خودرو بدون راننده خودروها کارواش شده و با باک بنزین
              پر تحویل مشتریان عزیز می گردد. در زمان استرداد خودرو در صورتی که
              خودرو به کارواش نیاز داشته و یا خودرو دارای کسر سوخت باشد هزینه آن
              بر عهده مشتری می باشد.
            </div>
          </div>
          <div className="mt-4 flex w-full flex-wrap items-center justify-end gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4 text-right text-base font-medium text-[#353535]">
            <div className="my-auto self-stretch text-[#353535]">
              آیا ماشین های اتورنت دارای بیمه هستند؟
            </div>
            <div className="my-auto flex h-6 w-6 flex-shrink-0 self-stretch"></div>
          </div>
          <div className="mt-4 flex w-full flex-wrap items-center justify-end gap-2 overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white p-4 text-right text-base font-medium text-[#353535]">
            <div className="my-auto self-stretch text-[#353535]">
              محدودیت کیلومتر در اجاره خودرو چقدر می باشد؟
            </div>
            <div className="my-auto flex h-6 w-6 flex-shrink-0 self-stretch"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
