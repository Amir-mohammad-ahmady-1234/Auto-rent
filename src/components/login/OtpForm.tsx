import { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';

const OtpForm = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  function handleAcceptLogin() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2 className="text-center text-xl font-semibold md:text-2xl">
        کد تأیید را وارد کنید
      </h2>
      <p className="text-center text-sm leading-relaxed text-gray-600 md:text-base">
        کد به شماره وارد شده پیامک شده است.
      </p>

      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        shouldAutoFocus
        inputType="tel"
        renderInput={(props) => (
          <input
            {...props}
            className="h-14 w-14 rounded-xl border border-gray-300 text-center text-lg focus:border-blue-600 focus:outline-none md:h-16 md:w-16 md:text-xl"
          />
        )}
        containerStyle="flex justify-center gap-3 md:gap-4"
      />

      <button
        onClick={handleAcceptLogin}
        disabled={otp.length !== 6}
        className={`mt-4 w-full rounded-md py-2 text-sm transition md:text-base ${
          otp.length === 6
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'cursor-not-allowed bg-gray-300 text-gray-500'
        }`}
      >
        تأیید
      </button>
    </div>
  );
};

export default OtpForm;
