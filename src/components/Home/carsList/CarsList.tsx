import { useContext } from 'react';
import CarsListHeader from './CarsListHeader';
import { CarsContext } from '../../../context/cars/CarsContext';
import Car from '../../../ui/Car';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CarsList = () => {
  const { cars: allCars, isLoading, error } = useContext(CarsContext);
  const cars = [...allCars]?.splice(0, 5);

  if (isLoading)
    return (
      <div className="m-10 grid grid-cols-2 gap-4">
        {[...Array(2)].map((_, i) => (
          <Skeleton key={i} height={200} />
        ))}
      </div>
    );

  if (error)
    return (
      <div className="flex w-full flex-col items-center justify-center px-4 py-8">
        <img
          src="/images/error.png"
          alt="خطای بارگذاری خودروها"
          className="w-full max-w-md object-contain"
        />
        <p className="mt-4 text-center text-lg font-semibold text-gray-700">
          اوه شت! مشکلی در بارگذاری ماشین‌ها پیش اومد. دوباره تلاش کن.
        </p>
      </div>
    );

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
