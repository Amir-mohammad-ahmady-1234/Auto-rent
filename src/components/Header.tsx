/* components/Header/AuthButton.tsx */
import { motion } from 'framer-motion';
import React from 'react';

const AuthButton: React.FC = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="h-10 cursor-pointer rounded-lg bg-blue-600 px-4 font-medium text-white shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
  >
    ورود / ثبت‌نام
  </motion.button>
);

// export default AuthButton;

/* components/Header/NavLinks.tsx */
// import { motion } from 'framer-motion';
// import React from 'react';

const links = ['رزرو خودرو', 'خدمات ما', 'بلاگ', 'درباره ما', 'تماس با ما'];

export const DesktopNav: React.FC = () => (
  <nav className="hidden items-center gap-8 md:flex">
    {links.map((link) => (
      <motion.a
        key={link}
        whileHover={{ scale: 1.1 }}
        className="cursor-pointer font-medium text-gray-700"
        href="#"
      >
        {link}
      </motion.a>
    ))}
  </nav>
);

export const MobileNav: React.FC<{ onLinkClick?: () => void }> = ({
  onLinkClick,
}) => (
  <div className="flex flex-col space-y-6">
    {links.map((link) => (
      <a
        key={link}
        onClick={onLinkClick}
        className="text-lg font-medium text-gray-800"
        href="#"
      >
        {link}
      </a>
    ))}
  </div>
);

/* components/Header/Logo.tsx */
// import React from 'react';

import MainLogo from '../assets/Logo.png';

const Logo: React.FC = () => (
  <div className="flex items-center gap-1">
    {/* SVG Logo can be inserted here */}
    <a href="#">
      <img src={MainLogo} alt="Auto-Rent-Logo" />
    </a>
    {/* <div className="text-2xl font-black text-yellow-500">رنت</div>
    <div className="text-2xl font-black text-blue-600">اتو</div> */}
  </div>
);

// export default Logo;

/* components/Header/MobileMenu.tsx */
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
// import { MobileNav } from './NavLinks';

const MobileMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="cursor-pointer focus:outline-none md:hidden"
      >
        {open ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="bg-opacity-50 fixed inset-0 z-40 bg-black"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />
            {/* Sliding Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 250 }}
              className="fixed top-0 right-0 z-50 flex h-full w-2/3 flex-col bg-white p-6 shadow-lg"
            >
              <button
                onClick={toggleMenu}
                className="mb-4 self-end focus:outline-none cursor-pointer"
              >
                <FiX size={28} />
              </button>
              <MobileNav />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// export default MobileMenu;

/* components/Header/Header.tsx */
// import React from 'react';
// import AuthButton from './AuthButton';
// import { DesktopNav } from './NavLinks';
// import Logo from './Logo';
// import MobileMenu from './MobileMenu';

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white shadow-md">
    <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
      <Logo />
      <DesktopNav />
      <div className="flex items-center gap-4">
        <AuthButton />
        <MobileMenu />
      </div>
    </div>
  </header>
);

export default Header;
