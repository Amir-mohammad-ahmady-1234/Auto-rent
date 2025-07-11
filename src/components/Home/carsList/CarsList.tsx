import { useContext } from 'react';
import CarsListHeader from './CarsListHeader';
import { CarsContext } from '../../../context/cars/CarsContext';
import Car from '../../../ui/Car';

import LoadingCar from '../../../ui/LoadingCar';
import NoCarsFound from '../../../ui/NoCarsFound';

const CarsList = () => {
  const { cars: allCars, isLoading, error } = useContext(CarsContext);
  const cars = [...allCars]?.splice(0, 3);

  if (isLoading) return <LoadingCar />;

  if (error) return <NoCarsFound />;

  return (
    <>
      <CarsListHeader />
      <div className="mt-6 px-4 sm:px-2 md:max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Car carDetails={car} key={car.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarsList;
