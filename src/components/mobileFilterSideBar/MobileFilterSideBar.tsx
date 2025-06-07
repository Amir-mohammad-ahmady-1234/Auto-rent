import { AnimatePresence, motion } from 'framer-motion';
import FilterCars from '../../features/rentCarFilters/FilterCars';

const MobileFilterSideBar = ({
  showFilters,
  setShowFilters,
}: {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {showFilters && (
        <>
          {/* 🔹 overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowFilters(false)}
            className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm lg:hidden"
          />

          {/* 🔹 main drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="fixed inset-0 z-[10000] flex justify-end lg:hidden"
            onClick={() => setShowFilters(false)}
          >
            <div
              className="h-full w-3/4 max-w-md space-y-6 overflow-y-auto bg-white p-6 font-[Estedad-FD] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">فیلترها</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>
              <FilterCars />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileFilterSideBar;
