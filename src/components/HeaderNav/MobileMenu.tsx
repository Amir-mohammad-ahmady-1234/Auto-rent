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
                className="mb-4 cursor-pointer self-end focus:outline-none"
              >
                <FiX size={28} />
              </button>
              {/* Search Input for Mobile */}
              {includeSearch && (
                <div className="relative mb-4 w-full">
                  <input
                    type="text"
                    placeholder="جستجو"
                    className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400" />
                </div>
              )}
              <MobileNav links={links} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
