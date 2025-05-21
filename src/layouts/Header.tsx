import React, { useState } from 'react';

import AuthButton from '../components/HeaderNav/AuthButton';
import Logo from '../components/HeaderNav/Logo';
import MobileMenu from '../components/HeaderNav/MobileMenu';
import DesktopNav from '../components/HeaderNav/DesktopNav';
import SearchLogo from '../assets/search-outline.png';
import SearchSuggestions from '../components/HeaderNav/SearchSuggestions';
import { FiSearch } from 'react-icons/fi';

const Header: React.FC = () => {
  const links: string[] = [
    'رزرو خودرو',
    'خدمات ما',
    'بلاگ',
    'درباره ما',
    'تماس با ما',
  ];

  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const handleSearchIconClick = () => {
    if (window.innerWidth >= 768) {
      setShowSearchSuggestions(!showSearchSuggestions);
    }
  };

  const handleCloseSearchSuggestions = () => {
    setShowSearchSuggestions(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        {/* Desktop Layout */}
        <div className="hidden w-full items-center justify-between md:flex">
          <Logo />
          <div className="flex items-center gap-8">
            <DesktopNav links={links} />
            <div
              className="flex cursor-pointer items-center"
              onClick={handleSearchIconClick}
            >
              <img src={SearchLogo} alt="Search" className="h-6 w-6" />
            </div>
          </div>
          <AuthButton />
        </div>

        {/* Mobile Layout */}
        <div className="flex w-full items-center justify-between gap-2 md:hidden">
          <MobileMenu links={links} includeSearch={true} />
          <div className="flex flex-1 items-center justify-center">
            <Logo />
          </div>
          <div className="min-w-[80px]">
            <AuthButton />
          </div>
        </div>
      </div>
      {showSearchSuggestions && (
        <div className="absolute top-full right-0 left-0 z-50 mt-2 flex justify-center">
          <SearchSuggestions onClose={handleCloseSearchSuggestions} />
        </div>
      )}
    </header>
  );
};

export default Header;
