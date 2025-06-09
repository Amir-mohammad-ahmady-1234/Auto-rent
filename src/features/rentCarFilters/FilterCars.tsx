import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { allFilters } from './filterCarsSlice';
import FilterByPrice from '../../components/cars/mainCarsFilters/FilterByPrice';
import FilterByBrand from '../../components/cars/mainCarsFilters/FilterByBrand';
import FilterByType from '../../components/cars/mainCarsFilters/FilterByType';
import { FilterInputContext } from '../../context/filtersInputContext/filterInputContext';
import CancelFilters from '../../components/cars/mainCarsFilters/CancelFilters';

function FilterCars() {
  // local states
  // const [inputValue, setInputValue] = useState<string>('0');
  // const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  // const [selectedCarType, setSelectedCarType] = useState<string>('');

  // get sttaes from context for save states after sideBar opened and closed in mobile size.
  const {
    inputValue,
    setInputValue,
    maxPrice,
    setMaxPrice,
    selectedBrands,
    setSelectedBrands,
    selectedCarType,
    setSelectedCarType,
  } = useContext(FilterInputContext);

  const dispatch = useDispatch();

  // New handler for rc-slider
  function handleRangeChange([min, max]: [number, number]) {
    setInputValue(String(min));
    setMaxPrice(String(max));
  }

  const handleCheckboxChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleRadioTypeChange = (type: string) => {
    if (selectedCarType === type) {
      setSelectedCarType('');
    } else {
      setSelectedCarType(type);
    }
  };

  useEffect(() => {
    dispatch(
      allFilters({
        price: inputValue,
        maxPrice: maxPrice,
        brand: selectedBrands,
        type: selectedCarType,
      })
    );
  }, [dispatch, inputValue, maxPrice, selectedBrands, selectedCarType]);

  return (
    <>
      <FilterByPrice
        min={Number(inputValue)}
        max={Number(maxPrice)}
        onRangeChange={handleRangeChange}
      />

      <FilterByBrand
        onCheckboxChange={handleCheckboxChange}
        selectedBrands={selectedBrands}
      />

      <FilterByType
        onRadioTypeChange={handleRadioTypeChange}
        selectedCarType={selectedCarType}
      />

      <CancelFilters />
    </>
  );
}

export default FilterCars;
