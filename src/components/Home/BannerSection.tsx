const BannerSection = () => {
  return (
    <div className="relative flex min-h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl md:min-h-[396px] md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c2ace1309830c3dde3d54305d1dcc35fdc5b0c6?placeholderIfAbsent=true"
        className="absolute inset-0 h-full w-full object-contain object-center"
        alt="Banner background"
      />
      {/* <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/492585bc045a54ff78aa0865bdcf30f21a1368c2?placeholderIfAbsent=true"
        className="absolute bottom-0 left-0 z-10 aspect-[4.18] w-full max-w-full object-contain object-center px-4"
        alt="Banner content"
      /> */}
    </div>
  );
};

export default BannerSection;
