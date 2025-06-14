import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
// import { useNavigate } from 'react-router-dom';

interface IOtpFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsAcceptRules: React.Dispatch<React.SetStateAction<boolean>>;
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}
const OtpForm = ({
  setPhone,
  setIsValid,
  setErrorMessage,
  setIsAcceptRules,
  setStep,
  otp,
  setOtp,
}: IOtpFormProps) => {
  // const navigate = useNavigate();
  const [timer, setTimer] = useState(120);
  const [isResendAvailable, setIsResendAvailable] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendAvailable(true);
    }
  }, [timer]);

  const handleChange = (value: string) => {
    if (/^\d*$/.test(value)) {
      setOtp(value);
    }
  };

  // const handleAcceptLogin = () => {
  //   if (otp.length === 6) {
  //     console.log('OTP accepted!');
  //     navigate(-1);
  //   }
  // };

  const handleResendCode = () => {
    console.log('کد مجدد ارسال شد');
    setTimer(120);
    setIsResendAvailable(false);
  };

  const handleEditPhoneNumber = () => {
    setStep(1);
    setPhone('');
    setIsValid(false);
    setErrorMessage('');
    setIsAcceptRules(false);
  };

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

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

      <div className="flex items-center gap-40">
        <button
          onClick={handleEditPhoneNumber}
          className="cursor-pointer text-sm text-blue-500 hover:text-blue-700"
        >
          ویرایش شماره موبایل
        </button>

        <div className="text-center text-sm text-gray-600">
          {isResendAvailable ? (
            <button
              onClick={handleResendCode}
              className="text-blue-600 hover:underline"
            >
              ارسال مجدد کد
            </button>
          ) : (
            <span>
              امکان ارسال مجدد تا{' '}
              <span className="text-blue-600">{formatTime(timer)}</span>
            </span>
          )}
        </div>
      </div>

      {/* <button
        onClick={handleAcceptLogin}
        disabled={otp.length !== 6}
        className={`mt-4 w-full rounded-md py-2 text-sm transition md:text-base ${
          otp.length === 6
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'cursor-not-allowed bg-gray-300 text-gray-500'
        }`}
      >
        تأیید
      </button> */}
    </div>
  );
};

export default OtpForm;
