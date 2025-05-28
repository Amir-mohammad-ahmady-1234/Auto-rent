import { useState } from 'react';
import React from 'react';
import { CarsContext } from './CarsContext';
import type { TCar } from '../../types/CarType';
import { carsData } from '../../data/carsData';

// provider
const CarsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cars, setCars] = useState<TCar[]>(carsData);

  return (
    <CarsContext.Provider value={{ cars, setCars }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsProvider;
