import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validatePhone } from '../components/login/loginUtils';

const useLogin = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isAcceptRules, setIsAcceptRules] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [step, setStep] = useState<number>(1);

  const isButtonDisabled =
    (step === 1 && (!isValid || !isAcceptRules)) ||
    (step === 2 && otp.length !== 6);

  function handleChangeRulesStatus() {
    setIsAcceptRules((prev) => !prev);
  }

  function handleChangePhone(rawValue: string) {
    let cleaned = rawValue;

    if (cleaned.startsWith('+98') && cleaned[3] === '0') {
      cleaned = '+98' + cleaned.slice(4);
    }

    if (cleaned.startsWith('98') && cleaned[2] === '0') {
      cleaned = '98' + cleaned.slice(3);
    }

    setPhone(cleaned);
    setIsValid(validatePhone(cleaned));
  }

  function handleStep() {
    if (step === 1 && isValid && isAcceptRules) {
      setOtp('');
      setStep(2);
      setIsValid(false);
      setIsAcceptRules(false);
    } else if (step === 2) {
      if (otp.length === 6) {
        navigate(-1);
      }
      //   setIsAcceptRules(true);
      setErrorMessage('');
      //   setIsValid(true);
    }
  }

  useEffect(() => {
    if (!isValid && phone.length > 11) {
      setErrorMessage('.شماره تلفن وارد شده معتبر نمیباشد');
    } else {
      setErrorMessage('');
    }
  }, [isValid, phone.length]);

  return {
    otp,
    setOtp,
    phone,
    setPhone,
    isValid,
    setIsValid,
    isAcceptRules,
    setIsAcceptRules,
    errorMessage,
    setErrorMessage,
    step,
    setStep,
    handleStep,
    isButtonDisabled,
    handleChangeRulesStatus,
    handleChangePhone,
  };
};

export default useLogin;
