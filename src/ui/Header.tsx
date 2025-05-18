import React from 'react';

import AuthButton from '../components/AuthButton';
import Logo from '../components/Logo';
import MobileMenu from '../components/MobileMenu';
import DesktopNav from '../components/DesktopNav';

const Header: React.FC = () => {
  const links: string[] = [
    'رزرو خودرو',
    'خدمات ما',
    'بلاگ',
    'درباره ما',
    'تماس با ما',
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Logo />
        <DesktopNav links={links} />
        <div className="flex items-center gap-4">
          <AuthButton />
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
