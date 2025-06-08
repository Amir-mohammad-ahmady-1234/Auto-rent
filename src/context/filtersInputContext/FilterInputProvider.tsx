import { useState } from 'react';
import { FilterInputContext } from './filterInputContext';

const FilterInputProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState<string>('0');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCarType, setSelectedCarType] = useState<string>('');

  return (
    <FilterInputContext.Provider
      value={{
        inputValue,
        setInputValue,
        selectedBrands,
        setSelectedBrands,
        selectedCarType,
        setSelectedCarType,
      }}
    >
      {children}
    </FilterInputContext.Provider>
  );
};

export default FilterInputProvider;
