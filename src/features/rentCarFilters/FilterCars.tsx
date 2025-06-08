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
    selectedBrands,
    setSelectedBrands,
    selectedCarType,
    setSelectedCarType,
  } = useContext(FilterInputContext);

  const dispatch = useDispatch();

  function handleFilteredCars(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  const handleCheckboxChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleRadioTypeChange = (type: string) => {
    setSelectedCarType((prev) => (prev === type ? '' : type));
  };

  useEffect(() => {
    dispatch(
      allFilters({
        price: inputValue,
        brand: selectedBrands,
        type: selectedCarType,
      })
    );
  }, [dispatch, inputValue, selectedBrands, selectedCarType]);

  return (
    <>
      <FilterByPrice
        inputValue={inputValue}
        onFilteredCars={handleFilteredCars}
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
