import { useState, useEffect } from 'react';
import FiltersWrapper from '../features/rentCarFilters/HeaderCarsFilter';
import FilterCars from '../features/rentCarFilters/FilterCars';
import AllCarsList from '../ui/AllCarsList';
import MobileFilterSideBar from '../components/mobileFilterSideBar/MobileFilterSideBar';

const BrowseCarsPage = () => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // 🔒 lock scroll when filter modal is open
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

  // close filter modal with Escape
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
      {/* top cars filter (sort, price filters) */}
      <div className="sticky top-0 z-30 w-full bg-white px-4 py-3 shadow-md lg:col-span-2">
        <FiltersWrapper />
      </div>

      {/* main section (render cars) */}
      <div className="grid grid-rows-[auto_1fr] gap-4">
        <AllCarsList />

        {/* <div className="flex flex-wrap gap-4 lg:hidden">
          <FiltersWrapper />
        </div> */}
      </div>

      {/* desktop sideBar*/}
      <aside className="hidden w-full max-w-md space-y-6 bg-white p-4 text-right font-[Estedad-FD] shadow-md lg:block">
        <FilterCars />
      </aside>

      {/* open filter sideBar button, in the mobile */}
      <button
        onClick={() => setShowFilters(true)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-blue-600 px-5 py-3 text-white shadow-lg lg:hidden"
      >
        فیلترها
      </button>

      {/* mobile filters sideBar*/}
      <MobileFilterSideBar
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
    </div>
  );
};

export default BrowseCarsPage;
