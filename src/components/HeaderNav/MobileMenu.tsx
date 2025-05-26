import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

interface MobileMenuProps {
  links: string[];
  includeSearch?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, includeSearch }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setOpen((prev) => !prev);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center focus:outline-none md:hidden"
      >
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="bg-opacity-50 fixed inset-0 z-40 bg-black"
              onClick={handleOverlayClick}
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
              className="font-iransans fixed top-0 right-0 z-50 flex h-full w-[280px] flex-col bg-white p-4 shadow-lg"
              onClick={(e) => e.stopPropagation()} // Prevent clicks inside menu from closing it
            >
              <button
                onClick={toggleMenu}
                className="mb-4 cursor-pointer self-end focus:outline-none"
              >
                <FiX size={24} />
              </button>
              {/* Search Input for Mobile */}
              {includeSearch && (
                <div className="relative mb-4 w-full">
                  <input
                    type="text"
                    placeholder="جستجو"
                    className="font-iransans w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" />
                </div>
              )}
              <MobileNav links={links} onLinkClick={() => setOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
