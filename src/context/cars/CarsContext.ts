import { createContext } from 'react';
import type { CarsContextType } from '../../types/CarsContextType';

const defaultValues: CarsContextType = {
  cars: [],
  error: null,
  isLoading: false
};

export const CarsContext = createContext<CarsContextType>(defaultValues);
