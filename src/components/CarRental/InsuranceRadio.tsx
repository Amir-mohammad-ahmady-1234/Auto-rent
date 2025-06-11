import { useContext } from 'react';
import { FilterInputContext } from '../../context/filtersInputContext/filterInputContext';

const InsuranceRadio = () => {
  const { handleToggleRadio, selectedInsurance } =
    useContext(FilterInputContext);

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
