import { useContext } from 'react';
import { selectFullyFilteredCars } from '../features/rentCarFilters/combinedSelector';
import { useAppSelector } from '../hooks/reduxHooks';
import Car from './Car';
import { CarsContext } from '../context/cars/CarsContext';
import LoadingCar from './LoadingCar';
import NoCarsFound from './NoCarsFound';

const AllCarsList = () => {
  const cars = useAppSelector(selectFullyFilteredCars);
  const { error, isLoading } = useContext(CarsContext);

  if (!isLoading && (cars.length < 1 || error)) return <NoCarsFound />;

  return (
    <section className="min-h-[60vh] overflow-y-auto">
      <div className="mt-6 px-4 font-[Estedad-FD] sm:px-2 md:max-w-full">
        {isLoading && <LoadingCar />}

        {cars.length > 0 && !isLoading && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {cars.map((carDetails) => (
              <Car carDetails={carDetails} key={carDetails.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCarsList;
