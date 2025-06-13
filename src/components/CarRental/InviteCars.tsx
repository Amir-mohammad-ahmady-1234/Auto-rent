import { useContext } from 'react';
import { CarsContext } from '../../context/cars/CarsContext';
import Car from '../../ui/Car';
import { Link } from 'react-router-dom';

const InviteCars = () => {
  const { cars } = useContext(CarsContext);
  const randomNum1 = Math.round(Math.random() * 5);
  const randomNum2 = Math.round(Math.random() * 5);
  const randomNum3 = Math.round(Math.random() * 5);

  const randomCars = cars.filter(
    (car) =>
      car.id === randomNum1 || car.id === randomNum2 || car.id === randomNum3
  );

  return (
    <div className='flex flex-col mr-10'>
      <Link to="/rent/cars">
        <div className="my-auto text-[#194BF0]">مشاهده همه{' >'}</div>
      </Link>
      <div className="mt-6 px-4 sm:px-2 md:max-w-full">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {randomCars.map((car) => (
            <Car carDetails={car} key={car.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InviteCars;
