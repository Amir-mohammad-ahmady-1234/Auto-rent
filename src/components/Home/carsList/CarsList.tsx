import { useContext } from 'react';
import CarsListHeader from './CarsListHeader';
import { CarsContext } from '../../../context/cars/CarsContext';
import Car from '../../cars/Car';

const CarsList = () => {
  const { cars: allCars } = useContext(CarsContext);
  const cars = allCars.filter((car) => car.id <= 6);

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
