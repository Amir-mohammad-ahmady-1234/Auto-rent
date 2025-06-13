import PhoneInput from 'react-phone-input-2';

const LoginPhoneInput = ({
  phone,
  onChangePhone,
}: {
  phone: string;
  onChangePhone: (value: string) => void;
}) => {
  return (
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
      inputClass="!w-full !h-[48px] !text-sm !rounded-md !border-gray-300"
      buttonClass="!border-gray-300"
      dropdownClass="!text-sm"
    />
  );
};

export default LoginPhoneInput;
