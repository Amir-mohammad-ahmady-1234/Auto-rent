import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingCar = () => {
  return (
    <div className="m-10 grid grid-cols-2 gap-4">
      {[...Array(2)].map((_, i) => (
        <Skeleton key={i} height={200} />
      ))}
    </div>
  );
};

export default LoadingCar;
