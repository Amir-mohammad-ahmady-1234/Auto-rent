import Logo from '../HeaderNav/Logo';

import 'react-phone-input-2/lib/style.css';
import useLogin from '../../hooks/useLogin';
import PhoneInputBox from './PhoneInputBox';
import LogInImage from './LogInImage';
import HeaderContent from './HeaderContent';
import OtpForm from './OtpForm';

const Login = () => {
  const {
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
  } = useLogin();
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
            {step === 1 && <HeaderContent />}

            <div className="flex flex-col gap-3">
              {step === 1 && (
                <PhoneInputBox
                  phone={phone}
                  onChangePhone={handleChangePhone}
                  isValid={isValid}
                  errorMessage={errorMessage}
                  onChangeRulesStatus={handleChangeRulesStatus}
                  isAcceptRules={isAcceptRules}
                />
              )}

              {step === 2 && (
                <OtpForm
                  otp={otp}
                  setOtp={setOtp}
                  setStep={setStep}
                  phone={phone}
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
