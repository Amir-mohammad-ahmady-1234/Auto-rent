import { useContext } from 'react';
import CarCard from './CarCard';
import CarsListHeader from './CarsListHeader';
import { CarsContext } from '../../../context/cars/CarsContext';

const CarsList = () => {
  const { cars } = useContext(CarsContext);

  return (
    <>
      <CarsListHeader />
      <div className="mt-6 px-4 font-[Estedad-FD] sm:px-2 md:max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              title={car.title}
              model={car.model}
              dailyPrice={car.dailyPrice}
              monthlyPrice={car.monthlyPrice}
              deposit={car.deposit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarsList;
