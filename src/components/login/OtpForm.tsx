import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import type { IOtpFormProps } from '../../types/OtpFormProps';

const OtpForm = ({
  setPhone,
  setIsValid,
  setErrorMessage,
  setIsAcceptRules,
  setStep,
  otp,
  setOtp,
}: IOtpFormProps) => {
  const [timer, setTimer] = useState(3);
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
    </div>
  );
};

export default OtpForm;
