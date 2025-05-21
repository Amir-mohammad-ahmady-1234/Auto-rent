import React, { useState, useRef, useEffect } from 'react';

import SearchLogo from '../../assets/search-outline.png';
import Logo from '../../components/HeaderNav/Logo';
import DesktopNav from '../../components/HeaderNav/DesktopNav';
import AuthButton from '../../components/HeaderNav/AuthButton';
import MobileMenu from '../../components/HeaderNav/MobileMenu';
import SearchSuggestions from '../../components/HeaderNav/SearchSuggestions';

const Header: React.FC = () => {
  const links: string[] = [
    'رزرو خودرو',
    'خدمات ما',
    'بلاگ',
    'درباره ما',
    'تماس با ما',
  ];

  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const searchIconRef = useRef<HTMLDivElement>(null);

  const handleSearchIconClick = () => {
    if (window.innerWidth >= 768) {
      setShowSearchSuggestions(!showSearchSuggestions);
    }
  };

  const handleCloseSearchSuggestions = () => {
    setShowSearchSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBoxRef.current &&
        searchIconRef.current &&
        !searchBoxRef.current.contains(event.target as Node) &&
        !searchIconRef.current.contains(event.target as Node)
      ) {
        setShowSearchSuggestions(false);
      }
    };

    if (showSearchSuggestions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearchSuggestions]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        {/* Desktop Layout */}
        <div className="hidden w-full items-center justify-between md:flex">
          <Logo />
          <div className="flex items-center gap-8">
            <DesktopNav links={links} />
            <div
              ref={searchIconRef}
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
        <div
          ref={searchBoxRef}
          className="absolute top-full left-1/2 z-40 mt-2 -translate-x-1/2"
        >
          <div className="w-[600px]">
            <SearchSuggestions onClose={handleCloseSearchSuggestions} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
