const CarTypesSection = () => {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center font-[Estedad-FD] text-2xl leading-[1.4] font-bold text-[#353535] md:mt-10 md:max-w-full">
      <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[6px] whitespace-nowrap md:whitespace-normal">
        <div className="self-center text-[#353535]">اسپرت</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf5461d92fbd22cba01df8f16fa4dc7e1cdfff0?placeholderIfAbsent=true"
          className="aspect-[2.3] w-full object-contain object-center"
          alt="Sport car"
        />
      </div>
      <div className="flex-basis-0 my-auto flex-1 flex-shrink self-stretch rounded-2xl">
        <div className="z-10 flex flex-col items-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-[9px] pr-[1px] pl-2">
          <div className="self-center text-[#353535]">شاسی بلند</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9c8d1c83fb3db53edc0b19040fe3777cc41c29?placeholderIfAbsent=true"
            className="aspect-[2.27] w-full object-contain object-center"
            alt="SUV car"
          />
        </div>
      </div>
      <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[6px] whitespace-nowrap md:whitespace-normal">
        <div className="self-center text-[#353535]">کروک</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddd9b5ee2f30c3faa88fef10eb9a8c9178d8d1b8?placeholderIfAbsent=true"
          className="aspect-[2.3] w-full object-contain object-center"
          alt="Convertible car"
        />
      </div>
      <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[7px] whitespace-nowrap md:whitespace-normal">
        <div className="self-center text-[#353535]">سدان</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/929c6818451bb7d3e27f4601c975e7357a67b058?placeholderIfAbsent=true"
          className="aspect-[2.3] w-full object-contain object-center"
          alt="Sedan car"
        />
      </div>
      <div className="flex-basis-0 my-auto flex flex-1 flex-shrink flex-col items-stretch self-stretch overflow-hidden rounded-2xl border border-[#D7D7D7] bg-white pt-2 pr-[6px] whitespace-nowrap md:whitespace-normal">
        <div className="self-center text-[#353535]">کوپه</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/60efd4d07ed1c030ff6711bcc5b2e3cfb43e71f3?placeholderIfAbsent=true"
          className="aspect-[2.3] w-full object-contain object-center"
          alt="Coupe car"
        />
      </div>
    </div>
  );
};

export default CarTypesSection;
