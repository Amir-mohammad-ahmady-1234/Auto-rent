import { useState } from 'react';

const InsuranceRadio = () => {
  const [selectedInsurance, setSelectedInsurance] = useState<'basic' | 'full'>(
    'basic'
  );

  function handleToggleRadio() {
    setSelectedInsurance((prev) => (prev === 'basic' ? 'full' : 'basic'));
  }

  return (
    <>
      <label className="flex items-center gap-1">
        <input
          type="checkbox"
          name="insuranceStatus"
          value="basic"
          checked={selectedInsurance === 'basic'}
          onChange={handleToggleRadio}
        />
        بیمه پایه
      </label>
      <label className="flex items-center gap-1">
        <input
          type="checkbox"
          name="insuranceStatus"
          value="full"
          checked={selectedInsurance === 'full'}
          onChange={handleToggleRadio}
        />
        بیمه کامل
      </label>
    </>
  );
};

export default InsuranceRadio;
