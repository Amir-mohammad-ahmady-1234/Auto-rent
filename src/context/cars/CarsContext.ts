import { createContext } from 'react';
import type { CarsContextType } from '../../types/CarsContextType';


const defaultValues: CarsContextType = {
  cars: [],
  setCars: () => {},
};

export const CarsContext = createContext<CarsContextType>(defaultValues);
