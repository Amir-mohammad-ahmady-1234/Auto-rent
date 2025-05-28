import { useState, useEffect } from 'react';
import HeaderCarsFilter from '../components/cars/HeaderCarsFilter';
import FilterCars from '../features/rentCar/FilterCars';
import AllCarsList from '../components/cars/AllCarsList';

const BrowseCarsPage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // برای بستن با Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowFilters(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div dir="ltr" className="relative grid grid-cols-1 lg:grid-cols-[3fr_1fr]">
      {/* main section */}
      <div className="grid grid-rows-[auto_1fr]">
        <HeaderCarsFilter />
        <AllCarsList />
      </div>

      {/* sidebar for desktop */}
      <aside className="hidden w-full max-w-md space-y-6 bg-white p-4 text-right font-[Estedad-FD] shadow-md lg:block">
        <FilterCars />
      </aside>

      {/* filter toggle button for mobile */}
      <button
        onClick={() => setShowFilters(true)}
        className="fixed bottom-4 left-4 z-50 rounded bg-blue-600 px-4 py-2 text-white shadow-md lg:hidden"
      >
        فیلترها
      </button>

      {/* mobile drawer */}
      {showFilters && (
        <div
          className="fixed inset-0 z-50 flex justify-end lg:hidden"
          onClick={() => setShowFilters(false)} // کلیک روی بک‌دراپ
        >
          {/* سایدبار */}
          <div
            className="h-full w-3/4 max-w-md space-y-6 overflow-y-auto bg-white p-4 font-[Estedad-FD] shadow-md"
            onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن وقتی روی داخل کلیک میشه
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">فیلترها</h2>
              <button onClick={() => setShowFilters(false)} className="text-xl">
                ✕
              </button>
            </div>
            <FilterCars />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseCarsPage;
