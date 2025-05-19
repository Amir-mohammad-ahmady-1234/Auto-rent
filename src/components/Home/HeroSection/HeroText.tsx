const HeroText = () => {
  return (
    <div
      dir="ltr"
      className="relative mt-9 flex min-h-[479px] w-full max-w-full flex-col items-end px-4 pt-[67px] pb-[126px] bg-blend-normal md:px-20 md:pb-[100px]"
    >
      <div className="relative mb-[-25px] flex w-full max-w-[763px] flex-col md:mb-[10px] md:w-[763px]">
        <div className="flex w-full flex-col items-stretch self-end text-right font-[Estedad-FD] md:w-[460px]">
          <div className="w-full self-end text-[32px] leading-[45px] font-bold text-[#FDB713] sm:text-[44px] sm:leading-[62px]">
            اُتـــو رِنت؛ سریع، آسان و به صرفه
          </div>
          <div className="mt-[7px] w-full text-[16px] leading-7 font-normal text-[#F9F9F9] sm:text-[20px] sm:leading-9">
            سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!{' '}
          </div>
        </div>
        {/* Removed the 'اتو رنت' text box as it's not visible in the mobile view of the image */}
      </div>
    </div>
  );
};

export default HeroText;
