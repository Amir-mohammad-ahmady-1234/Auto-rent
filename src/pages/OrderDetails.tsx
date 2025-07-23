import { useNavigate } from 'react-router-dom';
import { useReservedInfo } from '../context/carReservedData/useReserved';
import FullPageLoading from '../ui/FullPageLoading';
import StepManagement from '../ui/StepManagement';
import { useEffect } from 'react';
import { useStep } from '../context/handleReserveSteps/useStep';
import DetailsOfOrder from '../components/CarRental/DetailsOfOrder';

const OrderDetails = () => {
  const navigate = useNavigate();
  const { currentStep } = useStep();

  useEffect(
    function () {
      if (currentStep === 1) navigate('/rent');
    },
    [currentStep, navigate]
  );

  const { formInfo, mainCar } = useReservedInfo();

  if (!formInfo || !mainCar) return <FullPageLoading />;

  const { title } = mainCar;

  const {
    rentalType,
    deliveryDate,
    returnDate,
    pickupLocation,
    returnLocation,
  } = formInfo;

  return (
    <>
      <StepManagement />
      <DetailsOfOrder
        title={title}
        rentalType={rentalType}
        deliveryDate={deliveryDate.format()}
        returnDate={returnDate.format()}
        pickupLocation={pickupLocation}
        returnLocation={returnLocation}
      />
    </>
  );
};

export default OrderDetails;
