import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStep } from '../context/handleReserveSteps/useStep';
import StepManagement from '../ui/StepManagement';
import ReserveInfo from '../components/Payment/ReserveInfo';

const Payment = () => {
  const navigate = useNavigate();
  const { currentStep } = useStep();

  useEffect(
    function () {
      if (currentStep === 1) navigate('/rent');
      if (currentStep === 5) navigate('/rent/step4');
    },
    [currentStep, navigate]
  );

  return (
    <section className="w-full bg-gray-50 py-8">
      <StepManagement />

      <ReserveInfo />
    </section>
  );
};

export default Payment;
