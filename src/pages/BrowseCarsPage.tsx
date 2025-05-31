import { useState, useEffect } from 'react';
import FiltersWrapper from '../components/cars/HeaderCarsFilter';
import FilterCars from '../features/rentCar/FilterCars';
import AllCarsList from '../components/cars/AllCarsList';
import { AnimatePresence, motion } from 'framer-motion';

const BrowseCarsPage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // 🔒 قفل کردن اسکرول وقتی فیلتر بازه
  useEffect(() => {
    if (showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showFilters]);

  // 🔐 بستن با دکمه Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowFilters(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      dir="ltr"
      className="relative grid grid-cols-1 gap-6 lg:grid-cols-[3fr_1fr]"
    >
      {/* navbar یا فیلترهای بالا */}
      <div className="sticky top-0 z-30 w-full bg-white px-4 py-3 shadow-md lg:col-span-2">
        <FiltersWrapper />
      </div>

      {/* محتوای اصلی */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <AllCarsList />

        {/* فیلترهای پایین در موبایل */}
        <div className="flex flex-wrap gap-4 lg:hidden">
          <FiltersWrapper />
        </div>
      </div>

      {/* سایدبار دسکتاپ */}
      <aside className="hidden w-full max-w-md space-y-6 bg-white p-4 text-right font-[Estedad-FD] shadow-md lg:block">
        <FilterCars />
      </aside>

      {/* دکمه باز کردن drawer فیلتر موبایل */}
      <button
        onClick={() => setShowFilters(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg lg:hidden"
      >
        فیلترها
      </button>

      {/* سایدبار موبایل با overlay */}
      <AnimatePresence>
        {showFilters && (
          <>
            {/* 🔹 overlay تارکننده */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 z-[998] bg-black/30 backdrop-blur-sm lg:hidden"
            />

            {/* 🔹 drawer اصلی */}
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
    </div>
  );
};

export default BrowseCarsPage;
