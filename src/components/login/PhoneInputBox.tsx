import PhoneInput from 'react-phone-input-2';

const PhoneInputBox = ({
  phone,
  onChangePhone,
  isValid,
  errorMessage,
  isAcceptRules,
  onChangeRulesStatus,
}: {
  phone: string;
  onChangePhone: (value: string) => void;
  isValid: boolean;
  errorMessage: string;
  isAcceptRules: boolean;
  onChangeRulesStatus: () => void;
}) => {
  return (
    <>
      <PhoneInput
        value={phone}
        onChange={onChangePhone}
        country={'ir'}
        enableAreaCodes={true}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: false,
          placeholder: '+98 9********',
        }}
        containerClass="!w-full"
        inputClass={`!w-full !h-[48px] !text-sm !rounded-md !border-gray-300 ${!isValid && phone.length > 0 && '!border-red-500'}`}
        buttonClass="!border-gray-300"
        dropdownClass="!text-sm"
      />
      <label className="flex flex-col items-end justify-end gap-2 text-right text-sm">
        {errorMessage && <span className="text-red-600">{errorMessage}</span>}
        <div className="flex gap-2">
          <span>
            با ورود و ثبت‌نام در سایت، با{' '}
            <span className="text-blue-500">قوانین اتورنت</span> موافقت می‌کنم
          </span>
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={isAcceptRules}
            onChange={onChangeRulesStatus}
          />
        </div>
      </label>
    </>
  );
};

export default PhoneInputBox;
