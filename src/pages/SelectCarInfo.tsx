import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarsContext } from '../context/cars/CarsContext';
import CarReservationBox from '../components/CarRental/CarReservationBox';
import CarInfoBox from '../components/CarRental/CarInfoBox';
import HeroSlider from '../components/CarRental/HeroSlider';

const SelectCarInfo = () => {
  const { id } = useParams();
  const { cars } = useContext(CarsContext);

  const itemNumberID = Number(id?.split(':')[1]);

  const mainCar = cars.filter((car) => car.id === itemNumberID)[0];

  return (
    <div className="mt-16 flex min-h-screen w-full flex-col gap-8 lg:flex-row">
      <div className="w-full lg:w-2/3 space-y-10">
        <CarInfoBox carInfo={mainCar} />
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-white p-3 shadow sm:gap-4 sm:p-4">
          <HeroSlider carInfo={mainCar} />
        </div>
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/3">
        <CarReservationBox carInfo={mainCar} />
      </div>
    </div>
  );
};

export default SelectCarInfo;
