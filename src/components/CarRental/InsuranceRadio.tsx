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
      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          id="basic"
          name="insurance"
          value="basic"
          checked={selectedInsurance === 'basic'}
          onChange={handleToggleRadio}
          className="accent-[#194BF0]"
        />
        <label htmlFor="basic">بیمه پایه</label>
      </div>

      <div className="flex items-center justify-center gap-2">
        <input
          type="checkbox"
          id="full"
          name="insurance"
          value="full"
          checked={selectedInsurance === 'full'}
          onChange={handleToggleRadio}
          className="accent-[#194BF0]"
        />
        <label htmlFor="full">بیمه کامل</label>
      </div>
    </>
  );
};

export default InsuranceRadio;
