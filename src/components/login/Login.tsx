import { useState } from 'react';
import Logo from '../HeaderNav/Logo';

import 'react-phone-input-2/lib/style.css';
import LogInImage from './LogInImage';
import LoginHeaderContent from './LoginHeaderContent';
import LoginPhoneInput from './LoginPhoneInput';

const LoginLevelOne = () => {
  const [phone, setPhone] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isAcceptRules, setIsAcceptRules] = useState<boolean>(false);

  function validatePhone(value: string): boolean {
    const digitsOnly = value.replace(/\D/g, '');

    if (
      value.startsWith('+98') ||
      value.startsWith('98') ||
      value.startsWith('09')
    ) {
      const normalized = value.startsWith('0')
        ? '98' + digitsOnly.slice(1)
        : digitsOnly.startsWith('98')
          ? digitsOnly
          : digitsOnly;

      return /^98[9]\d{9}$/.test(normalized);
    }

    return /^\+?[1-9]\d{7,14}$/.test(value);
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

  function handleChangeRulesStatus() {
    setIsAcceptRules((prev) => !prev);
  }

  return (
    <div
      dir="ltr"
      className="flex h-screen w-full flex-col items-center bg-gray-200"
    >
      <div className="m-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:h-6/7 md:w-4/5 md:flex-row">
        <LogInImage />

        {/* Form section */}
        <div className="relative flex flex-1 flex-col justify-start px-6 py-6 sm:px-10">
          {/* Logo */}
          <div className="mt-2 mb-6 self-center">
            <Logo />
          </div>

          {/* Content */}
          <div className="flex h-full flex-col justify-center gap-6">
            <LoginHeaderContent />

            <div className="flex flex-col gap-3">
              <LoginPhoneInput
                phone={phone}
                onChangePhone={handleChangePhone}
              />
              <label className="flex items-center justify-end gap-2 text-right text-sm">
                <span>
                  با ورود و ثبت‌نام در سایت، با{' '}
                  <span className="text-blue-500">قوانین اتورنت</span> موافقت
                  می‌کنم
                </span>
                <input
                  type="checkbox"
                  className="accent-blue-500"
                  checked={isAcceptRules}
                  onChange={handleChangeRulesStatus}
                />
              </label>

              <button
                disabled={!isValid && !isAcceptRules}
                className={`rounded-md py-2 text-sm transition md:text-base ${
                  isValid && isAcceptRules
                    ? 'cursor-pointer bg-blue-600 text-white hover:bg-blue-700'
                    : 'cursor-not-allowed bg-gray-300 text-gray-500'
                } `}
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

export default LoginLevelOne;
