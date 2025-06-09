type InsuranceSelectorProps = {
  insurance: 'basic' | 'full';
  setInsurance: (type: 'basic' | 'full') => void;
};

const InsuranceSelector = ({ insurance, setInsurance }: InsuranceSelectorProps) => {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold">نوع بیمه:</p>
      <div className="flex gap-6 text-sm">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="insurance"
            value="basic"
            checked={insurance === 'basic'}
            onChange={() => setInsurance('basic')}
          />
          بیمه پایه
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="insurance"
            value="full"
            checked={insurance === 'full'}
            onChange={() => setInsurance('full')}
          />
          بیمه کامل
        </label>
      </div>
    </div>
  );
};

export default InsuranceSelector;
