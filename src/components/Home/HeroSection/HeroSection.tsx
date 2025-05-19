import HeroText from './HeroText';
import SearchOptions from './SearchOptions';
import { useState } from 'react';

const HeroSection = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  return (
    <div className="relative flex min-h-[500px] w-full max-w-full flex-col items-center overflow-hidden md:min-h-[681px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/521cd6dc024fad6f0783125d9049931bba479ed1?placeholderIfAbsent=true"
        className="absolute inset-0 h-full w-full object-cover object-bottom"
        alt="Background"
      />
      {/* Overlay container for text and search options */}
      {/* Use flex justify-between to push content to top and bottom */}
      <div className="relative z-10 flex h-full w-full max-w-full flex-col items-center justify-between pt-10 md:pt-0">
        {/* HeroText positioning is handled within HeroText component, but give it a wrapper for flex */}
        {/* Adjusted margin top for HeroText to position it higher */}
        <div className="mt-10 w-full max-w-[763px] md:mt-0">
          <HeroText />
        </div>

        {/* Search Options - Visible only on medium and larger screens */}
        {/* Adjusted margin top to position SearchOptions correctly below the text on larger screens */}
        <div className="mt-[-80px] hidden w-full max-w-[1223px] md:block">
          <SearchOptions />
        </div>

        {/* Button to open search modal - Visible only on small screens */}
        {/* Positioned absolutely at the bottom - Adjusted bottom value */}
        <button
          className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 transform items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-[#0C0C0C] shadow-lg md:hidden"
          onClick={handleOpenSearchModal}
        >
          جستجوی خودرو
        </button>
      </div>

      {/* Search Modal for small screens */}
      {isSearchModalOpen && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-4">
            <SearchOptions isModal={true} onClose={handleCloseSearchModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
