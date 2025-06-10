import InsuranceRadio from './InsuranceRadio';

const InsuranceSelector = () => {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold">نوع بیمه:</p>
      <div className="flex gap-6 text-sm">
        <InsuranceRadio />
      </div>
    </div>
  );
};

export default InsuranceSelector;
