import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStep } from '../context/handleReserveSteps/useStep';
import StepManagement from '../ui/StepManagement';
import ReserveInfo from '../components/Payment/ReserveInfo/ReserveInfo';
import CalculateMany from '../components/Payment/CalculateMany/CalculateMany';
import PayMany from '../components/Payment/CalculateMany/PayMany';

const Payment = () => {
  const navigate = useNavigate();
  const { currentStep } = useStep();
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>('');

  useEffect(
    function () {
      if (currentStep === 1) navigate('/rent');
      if (currentStep === 5) navigate('/rent/step4');
    },
    [currentStep, navigate]
  );

  const handlePaymentOptionChange = (option: string) => {
    setSelectedPaymentOption(option);
  };

  const handlePaymentSubmit = () => {
    if (selectedPaymentOption) {
      // Handle payment submission logic here
      console.log('Payment submitted with option:', selectedPaymentOption);
      // You can add navigation logic or API calls here
    }
  };

  return (
    <section className="w-full bg-gray-50 py-8">
      <StepManagement />

      <div className="flex flex-col space-y-16">
        <ReserveInfo />
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-stretch lg:gap-0">
          <CalculateMany />
          <PayMany
            onPaymentOptionChange={handlePaymentOptionChange}
            onPaymentSubmit={handlePaymentSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Payment;
