// BrowseCarsPage.tsx
import { useState, useEffect } from 'react';
import FiltersWrapper from '../components/cars/HeaderCarsFilter';
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
    <div dir="ltr" className="relative grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
      {/* فیلترهای بالا */}
      <div className="sticky top-0 z-30 w-full bg-white px-4 py-3 shadow-md lg:col-span-2">
        <FiltersWrapper />
      </div>

      {/* main section */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <AllCarsList />

        {/* فیلترها برای موبایل زیر لیست */}
        <div className="flex flex-wrap gap-4 lg:hidden">
          <FiltersWrapper />
        </div>
      </div>

      {/* sidebar for desktop */}
      <aside className="hidden w-full max-w-md space-y-6 bg-white p-4 text-right font-[Estedad-FD] shadow-md lg:block">
        <FilterCars />
      </aside>

      {/* filter toggle button for mobile */}
      <button
        onClick={() => setShowFilters(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg lg:hidden"
      >
        فیلترها
      </button>

      {/* mobile drawer */}
      {showFilters && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-30 lg:hidden"
          onClick={() => setShowFilters(false)}
        >
          <div
            className="h-full w-3/4 max-w-md space-y-6 overflow-y-auto bg-white p-6 font-[Estedad-FD] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">فیلترها</h2>
              <button onClick={() => setShowFilters(false)} className="text-2xl">
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