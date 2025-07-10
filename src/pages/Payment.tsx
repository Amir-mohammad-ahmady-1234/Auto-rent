import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStep } from '../context/handleReserveSteps/useStep';
import StepManagement from '../ui/StepManagement';
import ReserveInfo, {
  type CarData,
  type FormInfo,
} from '../components/Payment/ReserveInfo/ReserveInfo';
import CalculateMany from '../components/Payment/CalculateMany/CalculateMany';
import PayMany from '../components/Payment/CalculateMany/PayMany';
import RulesModal from '../ui/RulesModal';
import { RulesAccept } from '../components/Payment/Rules accept and pat btn';
import { useReservedInfo } from '../context/carReservedData/useReserved';
import FullPageLoading from '../ui/FullPageLoading';

const Payment = () => {
  const navigate = useNavigate();
  const { currentStep } = useStep();
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>('');
  const [isRulesAccepted, setIsRulesAccepted] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const { mainCar, formInfo } = useReservedInfo();

  useEffect(
    function () {
      if (currentStep === 1) navigate('/rent');
      if (currentStep === 5) navigate('/rent/order-details');
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

  const handleRulesAcceptChange = (accepted: boolean) => {
    setIsRulesAccepted(accepted);
  };

  const handleViewRules = () => {
    setIsRulesModalOpen(true);
  };

  const handleRulesModalConfirm = () => {
    setIsRulesModalOpen(false);
    setIsRulesAccepted(true);
  };

  if (!mainCar || !formInfo) return <FullPageLoading />;
  const data: [CarData, FormInfo] = [mainCar as CarData, formInfo as FormInfo];

  return (
    <section className="w-full bg-gray-50 py-8">
      <StepManagement />

      <div className="flex flex-col space-y-10">
        <ReserveInfo data={data} />
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-6 lg:flex-row lg:gap-0 lg:space-y-0 lg:space-x-0">
          <div className="flex w-full lg:w-1/2">
            <CalculateMany mainCar={mainCar} />
          </div>
          <div className="flex w-full lg:w-1/2">
            <PayMany
              onPaymentOptionChange={handlePaymentOptionChange}
              onPaymentSubmit={handlePaymentSubmit}
            />
          </div>
        </div>
        <div className="mx-auto w-full max-w-5xl rounded-xl bg-white p-4 shadow md:p-8">
          <RulesAccept
            isAccepted={isRulesAccepted}
            onAcceptChange={handleRulesAcceptChange}
            onViewRules={handleViewRules}
          />
        </div>
        {isRulesModalOpen && (
          <RulesModal
            isOpen={isRulesModalOpen}
            onConfirm={handleRulesModalConfirm}
          />
        )}
      </div>
    </section>
  );
};

export default Payment;
