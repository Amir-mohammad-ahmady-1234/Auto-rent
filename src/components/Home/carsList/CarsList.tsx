import { useContext } from 'react';
import CarsListHeader from './CarsListHeader';
import { CarsContext } from '../../../context/cars/CarsContext';
import Car from '../../../features/rentCar/Car';

const CarsList = () => {
  const { cars } = useContext(CarsContext);

  return (
    <>
      <CarsListHeader />
      <div className="mt-6 px-4 sm:px-2 md:max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Car carDetails={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarsList;
