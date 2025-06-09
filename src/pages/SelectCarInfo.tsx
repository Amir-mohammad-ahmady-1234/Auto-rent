import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarsContext } from '../context/cars/CarsContext';
import CarReservationBox from '../components/CarRental/CarReservationBox';
import CarInfoBox from '../components/CarRental/CarInfoBox';

const SelectCarInfo = () => {
  const { id } = useParams();
  const { cars } = useContext(CarsContext);

  const itemNumberID = Number(id?.split(':')[1]);

  const mainCar = cars.filter((car) => car.id === itemNumberID)[0];

  return (
    <div className="flex min-h-screen w-full flex-col gap-8 lg:flex-row mt-16">
      <div className="w-full lg:w-2/3">
        <CarInfoBox carInfo={mainCar} />
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/3">
        <CarReservationBox carInfo={mainCar} />
      </div>
    </div>
  );
};

export default SelectCarInfo;
