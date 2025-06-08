import { createContext } from 'react';
import type { IdefaultValue } from '../../types/filterInputContextType';

const defaultValue: IdefaultValue = {
  inputValue: '0',
  setInputValue: () => {},
  selectedBrands: [],
  setSelectedBrands: () => {},
  selectedCarType: '',
  setSelectedCarType: () => {},
};

export const FilterInputContext = createContext(defaultValue);
