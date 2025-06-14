import { useContext, useEffect, useState } from 'react';
import { CarsContext } from '../../context/cars/CarsContext';
import Car from '../../ui/Car';
import { Link } from 'react-router-dom';
import type { TCar } from '../../types/CarType';

const InviteCars = () => {
  const { cars } = useContext(CarsContext);

  const [randomCars, setRandomCars] = useState<TCar[]>([]);

  useEffect(() => {
    if (cars.length === 0) return;

    const threeRandomUniqueCars = [...cars]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    setRandomCars(threeRandomUniqueCars);
  }, [cars]);

  return (
    <div className="mr-10 flex flex-col">
      <div className="flex items-center justify-around">
        <h4>خودرو هایی که شاید دوست داشته باشد ...</h4>
        <Link to="/rent/cars">
          <div className="my-auto text-[#194BF0]">مشاهده همه{' >'}</div>
        </Link>
      </div>
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
