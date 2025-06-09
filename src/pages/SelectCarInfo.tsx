import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CarsContext } from '../context/cars/CarsContext';
import Car from '../ui/Car';

const SelectCarInfo = () => {
  const { id } = useParams();
  const { cars } = useContext(CarsContext);

  const itemNumberID = Number(id?.split(':')[1]);

  const mainCar = cars.filter((car) => car.id === itemNumberID)[0];

  return <Car carDetails={mainCar} />;
};

export default SelectCarInfo;
