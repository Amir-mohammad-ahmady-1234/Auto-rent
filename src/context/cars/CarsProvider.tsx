import React, { useEffect } from 'react';
import { CarsContext } from './CarsContext';
import { useQuery } from '@tanstack/react-query';
import { getCars } from '../../services/apiCars';
import type { TCar } from '../../types/CarType';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setCars as setFilterCars } from '../../features/rentCarFilters/filterCarsSlice';
import { setCars as setPriceCars } from '../../features/rentCarFilters/headerCarsFilterSlice';
import { setCars as setSortCars } from '../../features/rentCarFilters/sortByFilterSlice';

const CarsProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  const {
    data: cars,
    error,
    isLoading,
  } = useQuery<TCar[], Error>({
    queryKey: ['cars'],
    queryFn: getCars,
  });

  useEffect(() => {
    if (cars) {
      dispatch(setFilterCars(cars));
      dispatch(setPriceCars(cars));
      dispatch(setSortCars(cars));
    }
  }, [cars, dispatch]);

  return (
    <CarsContext.Provider value={{ cars: cars ?? [], error, isLoading }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
