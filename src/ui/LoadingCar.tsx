import { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { CarsContext } from '../context/cars/CarsContext';

const LoadingCar = () => {
  const { cars } = useContext(CarsContext);

  return (
    <div className="m-10 grid grid-cols-2 gap-4">
      {[...Array(cars.length)].map((_, i) => (
        <Skeleton key={i} width={300} height={500} />
      ))}
    </div>
  );
};

export default LoadingCar;
