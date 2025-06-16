import { useState } from 'react';
import { useSendOtp } from './useLoginMutation';
import { validatePhone } from '../components/login/loginUtils';

const useLogin = () => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAcceptRules, setIsAcceptRules] = useState(false);
  const [otp, setOtp] = useState('');

  const sendOtpMutation = useSendOtp();

  const handleChangePhone = (value: string) => {
    setPhone(value);
    const valid = validatePhone(value);
    setIsValid(valid);
    setErrorMessage(valid ? '' : 'شماره معتبر نیست');
  };

  const handleChangeRulesStatus = () => {
    setIsAcceptRules((prev) => !prev);
  };

  const handleStep = async () => {
    if (!isValid || !isAcceptRules) return;

    try {
      await sendOtpMutation.mutateAsync(phone);
      setStep(2);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'ارسال کد با خطا مواجه شد';
      setErrorMessage(message);
      console.error('خطا در ارسال کد:', err);
    }
  };

  const isButtonDisabled = !isValid || !isAcceptRules;

  return {
    step,
    phone,
    handleChangePhone,
    isValid,
    errorMessage,
    handleChangeRulesStatus,
    isAcceptRules,
    otp,
    setOtp,
    setStep,
    setPhone,
    setIsValid,
    setErrorMessage,
    setIsAcceptRules,
    isButtonDisabled,
    handleStep,
  };
};

export default useLogin;
