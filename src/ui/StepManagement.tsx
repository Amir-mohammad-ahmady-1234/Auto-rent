import { useReservedInfo } from '../context/carReservedData/useReserved';
import { useStep } from '../context/handleReserveSteps/useStep';

const StepManagement = () => {
  const { currentStep } = useStep();

  const { formInfo } = useReservedInfo();
  console.log(formInfo);

  return (
    <div className="mx-auto flex max-w-4xl items-center justify-between rounded-lg bg-white p-4 shadow">
      <Step
        icon="🚗"
        title="انتخاب خودرو"
        isActive={currentStep > 1 ? true : false}
        isCurrentStep={currentStep === 1 ? true : false}
      />
      <Step
        icon="📄"
        title="مشخصات"
        isActive={currentStep > 2 ? true : false}
        isCurrentStep={currentStep === 2 ? true : false}
      />
      <Step
        icon="✅"
        title="تایید اطلاعات"
        isActive={currentStep > 3 ? true : false}
        isCurrentStep={currentStep === 3 ? true : false}
      />
      <Step
        icon="💳"
        title="پرداخت"
        isActive={currentStep > 4 ? true : false}
        isCurrentStep={currentStep === 4 ? true : false}
      />
      <Step
        icon="🏁"
        title="تحویل خودرو"
        isActive={currentStep > 5 ? true : false}
        isCurrentStep={currentStep === 5 ? true : false}
      />
    </div>
  );
};

const Step = ({
  icon,
  title,
  isActive = false,
  isCurrentStep = false,
}: {
  icon: string;
  title: string;
  isActive?: boolean;
  isCurrentStep?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-full text-xl ${
        isCurrentStep
          ? 'bg-yellow-600 text-white'
          : isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200'
      }`}
    >
      {icon}
    </div>

    <span className="mt-2 text-xs">{title}</span>
  </div>
);

export default StepManagement;
