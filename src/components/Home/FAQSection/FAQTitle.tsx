const FAQTitle = () => {
  return (
    <div className="font-iransans flex w-full flex-col items-center justify-center px-4 text-center">
      <div
        className="text-xl font-normal text-[#5E5E5E] sm:text-2xl animate-fadeIn"
      >
        پر تکرارترین سؤالاتی که پرسیدید
      </div>
      <div
        className="font-iranyekan mt-2 text-[28px] leading-[1.4] font-bold text-[#353535] sm:text-[32px] md:text-[36px] animate-slideUp"
      >
        سؤالات <span className="text-[#d79c10]">متداول</span>
      </div>
    </div>
  );
};

export default FAQTitle;
