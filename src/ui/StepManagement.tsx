import { useStep } from '../context/handleReserveSteps/useStep';

const StepManagement = () => {
  const { currentStep } = useStep();

  return (
    <div className="relative mx-auto flex max-w-4xl items-center justify-between rounded-lg bg-white p-4 shadow">
      {/* Full line behind steps: from center of first to center of last */}
      <div className="absolute top-9 left-1/10 right-1/10 h-0.5 bg-gray-300 z-0"></div>

      <Step
        icon="🚗"
        title="انتخاب خودرو"
        isActive={currentStep > 1}
        isCurrentStep={currentStep === 1}
      />
      <Step
        icon="📄"
        title="مشخصات"
        isActive={currentStep > 2}
        isCurrentStep={currentStep === 2}
      />
      <Step
        icon="✅"
        title="تایید اطلاعات"
        isActive={currentStep > 3}
        isCurrentStep={currentStep === 3}
      />
      <Step
        icon="💳"
        title="پرداخت"
        isActive={currentStep > 4}
        isCurrentStep={currentStep === 4}
      />
      <Step
        icon="🏁"
        title="تحویل خودرو"
        isActive={currentStep > 5}
        isCurrentStep={currentStep === 5}
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
  <div className="relative flex flex-1 flex-col items-center z-10">
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
