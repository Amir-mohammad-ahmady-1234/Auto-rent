import React from 'react';
import { CarsContext } from './CarsContext';
import { useQuery } from '@tanstack/react-query';
import { getCars } from '../../services/apiCars';
import type { TCar } from '../../types/CarType';

// provider
const CarsProvider = ({ children }: { children: React.ReactNode }) => {
  // const [cars, setCars] = useState<TCar[]>(carsData);

  const {
    data: cars,
    error,
    isLoading,
  } = useQuery<TCar[], Error>({
    queryKey: ['cars'],
    queryFn: getCars,
  });

  return (
    <CarsContext.Provider value={{ cars: cars ?? [], error, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
