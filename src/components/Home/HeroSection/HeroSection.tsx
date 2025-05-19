import HeroText from './HeroText';
import SearchOptions from './SearchOptions';

const HeroSection = () => {
  return (
    <div className="relative flex min-h-[681px] w-full max-w-full flex-col items-center overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/521cd6dc024fad6f0783125d9049931bba479ed1?placeholderIfAbsent=true"
        className="absolute inset-0 h-full w-full object-cover object-center"
        alt="Background"
      />
      <HeroText />
      <SearchOptions />
    </div>
  );
};

export default HeroSection;
