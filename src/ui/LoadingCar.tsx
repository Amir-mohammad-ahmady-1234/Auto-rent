import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingCar = ({ carsLength }: { carsLength: number }) => {
  return (
    <div className="mx-auto my-10 grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(carsLength ? carsLength : 6)].map((_, i) => (
        <div
          key={i}
          className="flex w-full max-w-[450px] flex-col rounded-xl border border-gray-300 bg-white p-6 shadow-lg transition-transform duration-200 hover:scale-[1.02]"
        >
          <Skeleton
            height={250}
            className="rounded-lg"
            baseColor="#d1d5db" // slate-300
            highlightColor="#e5e7eb" // slate-200
          />{' '}
          {/* تصویر ماشین */}
          <div className="mt-5">
            <Skeleton
              height={25}
              width={`90%`}
              baseColor="#d1d5db"
              highlightColor="#e5e7eb"
            />{' '}
            {/* عنوان ماشین */}
          </div>
          <div className="mt-3">
            <Skeleton
              height={20}
              width={`70%`}
              baseColor="#d1d5db"
              highlightColor="#e5e7eb"
            />{' '}
            {/* قیمت یا توضیح */}
          </div>
          <div className="mt-3">
            <Skeleton
              height={20}
              width={`50%`}
              baseColor="#d1d5db"
              highlightColor="#e5e7eb"
            />{' '}
            {/* جزئیات کوچیک */}
          </div>
          <div className="mt-5">
            <Skeleton
              height={40}
              width={`100%`}
              baseColor="#d1d5db"
              highlightColor="#e5e7eb"
              className="rounded-md"
            />{' '}
            {/* دکمه رزرو یا جزئیات */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingCar;
