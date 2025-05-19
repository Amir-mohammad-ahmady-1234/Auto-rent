const ReviewHeader = () => {
  return (
    <div className="mt-12 flex w-full max-w-[845px] flex-col items-center justify-center px-4 text-center font-[Estedad-FD] md:mt-10">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-2xl font-normal text-[#5E5E5E] sm:text-xl">
          آنچه مشتریان ما درموردمان گفته‌اند.
        </div>
        <div className="mt-2 text-[32px] leading-[1.4] font-bold text-[#353535] sm:text-2xl md:max-w-full">
          نظرات <span className="text-[#d79c10]">مشتریان</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewHeader;
