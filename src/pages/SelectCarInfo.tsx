import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CarsContext } from '../context/cars/CarsContext';
import CarReservationBox from '../components/CarRental/rentalForm/CarReservationBox';
import CarInfoBox from '../components/CarRental/CarInfoBox';
import HeroSlider from '../components/CarRental/HeroSlider';
import FeaturesCarComponent from '../components/CarRental/FeaturesCarComponent';
import AboutCarComponent from '../components/CarRental/AboutCarComponent';
import MoreCarDetails from '../components/CarRental/MoreCarDetails';
import CommentForSelectedCar from '../components/CarRental/CommentForSelectedCar';
import CarCoversDetails from '../components/CarRental/CarCoversDetails';
import InviteCars from '../components/CarRental/InviteCars';
import FullPageLoading from '../ui/FullPageLoading';
import { useStep } from '../context/handleReserveSteps/useStep';

const SelectCarInfo = () => {
  const { brand } = useParams();
  const { cars } = useContext(CarsContext);
  const { currentStep } = useStep();
  const navigate = useNavigate();

  const mainCar = cars.filter((car) => {
    return car.brand === brand;
  })[0];

  useEffect(
    function () {
      if (currentStep === 2) navigate('/rent/select_user_info');
    },
    [currentStep, navigate]
  );

  if (!mainCar) return <FullPageLoading />;

  return (
    <div className="mt-16 flex min-h-screen w-full flex-col gap-8 lg:flex-row">
      <div className="order-1 flex h-full w-full justify-center lg:order-2 lg:w-1/3">
        <CarReservationBox carInfo={mainCar} />
      </div>

      <div className="order-2 w-full space-y-10 lg:order-1 lg:w-2/3">
        <CarInfoBox carInfo={mainCar} />
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-xl bg-white p-3 shadow sm:gap-4 sm:p-4">
          <HeroSlider carInfo={mainCar} />
        </div>
        <CarCoversDetails />
        <MoreCarDetails carInfo={mainCar} />
        <FeaturesCarComponent carInfo={mainCar} />
        <AboutCarComponent carInfo={mainCar} />
        <CommentForSelectedCar />
        <InviteCars />
      </div>
    </div>
  );
};

export default SelectCarInfo;
