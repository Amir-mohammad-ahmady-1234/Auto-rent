import { selectFullyFilteredCars } from '../features/rentCarFilters/combinedSelector';
import { useAppSelector } from '../hooks/reduxHooks';
import Car from './Car';
import NoCarsFound from './NoCarsFound';

const AllCarsList = () => {
  const cars = useAppSelector(selectFullyFilteredCars);

  return (
    <section className="overflow-y-auto min-h-[60vh]">
      <div className="mt-6 px-4 font-[Estedad-FD] sm:px-2 md:max-w-full">
        {cars.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {cars.map((carDetails) => (
              <Car carDetails={carDetails} key={carDetails.id} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <NoCarsFound />
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCarsList;
