const BannerSection = () => {
  return (
 <div className="relative flex min-h-[396px] w-full flex-col overflow-hidden rounded-2xl pb-[104px] md:max-w-full md:pb-[100px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2ace1309830c3dde3d54305d1dcc35fdc5b0c6?placeholderIfAbsent=true"
            className="absolute inset-0 h-full w-full object-cover object-center"
            alt="Banner background"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/492585bc045a54ff78aa0865bdcf30f21a1368c2?placeholderIfAbsent=true"
            className="mb-[-21px] aspect-[4.18] w-full object-contain object-center md:mb-[10px] md:max-w-full"
            alt="Banner content"
          />
        </div>
  );
};

export default BannerSection;