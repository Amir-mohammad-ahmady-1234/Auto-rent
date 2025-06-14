import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../HeaderNav/Logo';
import LogInImage from './LogInImage';
import LoginHeaderContent from './LoginHeaderContent';
import LoginPhoneInput from './LoginPhoneInput';
import SendMessage from './OtpForm';
import { validatePhone } from './loginLogics';

import 'react-phone-input-2/lib/style.css';

const Login = () => {
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
      setIsAcceptRules(true);
      setErrorMessage('');
      setIsValid(true);
    }
  }

  useEffect(() => {
    if (!isValid && phone.length > 11) {
      setErrorMessage('.شماره تلفن وارد شده معتبر نمیباشد');
    } else {
      setErrorMessage('');
    }
  }, [isValid, phone.length]);

  return (
    <div
      dir="ltr"
      className="flex h-screen w-full flex-col items-center bg-gray-200"
    >
      <div className="m-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:h-6/7 md:w-4/5 md:flex-row">
        <LogInImage />

        {/* فرم ورود */}
        <div className="relative flex flex-1 flex-col justify-start px-6 py-6 sm:px-10">
          {/* لوگو */}
          <div className="mt-2 mb-6 self-center">
            <Logo />
          </div>

          {/* محتوای فرم */}
          <div className="flex h-full flex-col justify-center gap-6">
            {step === 1 && <LoginHeaderContent />}

            <div className="flex flex-col gap-3">
              {step === 1 && (
                <LoginPhoneInput
                  phone={phone}
                  onChangePhone={handleChangePhone}
                  isValid={isValid}
                  errorMessage={errorMessage}
                  onChangeRulesStatus={handleChangeRulesStatus}
                  isAcceptRules={isAcceptRules}
                />
              )}

              {step === 2 && (
                <SendMessage
                  otp={otp}
                  setOtp={setOtp}
                  setStep={setStep}
                  setPhone={setPhone}
                  setIsValid={setIsValid}
                  setErrorMessage={setErrorMessage}
                  setIsAcceptRules={setIsAcceptRules}
                />
              )}

              <button
                disabled={isButtonDisabled}
                onClick={handleStep}
                className={`rounded-md py-2 text-sm transition md:text-base ${
                  isButtonDisabled
                    ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                    : 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                تأیید و ادامه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
