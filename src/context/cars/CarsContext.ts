import { createContext } from 'react';

interface Car {
  id: number;
  image: string;
  title: string;
  model: string;
  dailyPrice: string;
  monthlyPrice: string;
  deposit: string;
}

interface CarsContextType {
  cars: Car[];
  setCars: React.Dispatch<React.SetStateAction<Car[]>>;
}

const defaultValues: CarsContextType = {
  cars: [],
  setCars: () => {},
};

export const CarsContext = createContext<CarsContextType>(defaultValues);
export type { Car, CarsContextType };
