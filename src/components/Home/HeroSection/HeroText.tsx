const HeroText = () => {
  return (
    <section
      dir="ltr"
      className="relative flex min-h-[400px] w-full flex-col items-end justify-center bg-gradient-to-b to-transparent px-4 py-16 md:min-h-[480px] md:px-20 md:py-24"
    >
      <div className="max-w-xl text-right">
        <h1 className="font-iranyekan text-3xl leading-tight font-bold text-[#FDB713] sm:text-4xl sm:leading-[62px]">
          اُتـــو رِنت؛ سریع، آسان و به صرفه
        </h1>
        <p className="mt-4 text-base leading-7 font-normal text-[#F9F9F9] sm:text-lg sm:leading-9">
          سرویس دهنده رزرو خودرو در ایران در کمترین زمان ممکن!
        </p>
      </div>
    </section>
  );
};

export default HeroText;
