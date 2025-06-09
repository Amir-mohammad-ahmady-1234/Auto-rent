import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarsContext } from '../context/cars/CarsContext';
import Car from '../ui/Car';
import { CarRentalBookingForm } from '../components/CarRental/CarRentalBookingForm';

const SelectCarInfo = () => {
  const { id } = useParams();
  const { cars } = useContext(CarsContext);

  const itemNumberID = Number(id?.split(':')[1]);

  const mainCar = cars.filter((car) => car.id === itemNumberID)[0];

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:flex-row">
      <div className="flex-1"></div>
      <div className="w-full max-w-lg">
        <CarRentalBookingForm />
      </div>
    </div>
  );
};

export default SelectCarInfo;
