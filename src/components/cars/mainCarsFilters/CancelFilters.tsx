import { useContext } from 'react';
import { FilterInputContext } from '../../../context/filtersInputContext/filterInputContext';

const CancelFilters = () => {
  const { setInputValue, setSelectedBrands, setSelectedCarType } =
    useContext(FilterInputContext);

  function handleCancelFilters() {
    setInputValue('0');
    setSelectedBrands([]);
    setSelectedCarType('');
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-full cursor-pointer rounded-lg bg-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-300"
        onClick={handleCancelFilters}
      >
        لغو فیلترها
      </button>
    </div>
  );
};

export default CancelFilters;
