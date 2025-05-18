import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from 'framer-motion';
import MobileNav from "./MobileNav";

const MobileMenu: React.FC<{ links: string[] }> = ({ links }) => {
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
              <MobileNav links={links} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
