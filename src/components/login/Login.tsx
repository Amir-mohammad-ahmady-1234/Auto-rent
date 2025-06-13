import Logo from '../HeaderNav/Logo';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginLevelOne = () => {
  return (
    <div
      dir="ltr"
      className="flex h-screen w-full flex-col items-center bg-gray-200"
    >
      <div className="m-auto flex h-full w-full max-w-screen-lg flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:h-6/7 md:w-4/5 md:flex-row">
        {/* Image section */}
        <div className="hidden shrink-0 md:block md:h-full md:w-2/8">
          <img
            src="images/olav-tvedt--oVaYMgBMbs-unsplash 1.png"
            alt="car"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="relative flex flex-1 flex-col justify-start px-6 py-6 sm:px-10">
          {/* Logo */}
          <div className="mt-2 mb-6 self-center">
            <Logo />
          </div>

          {/* Content */}
          <div className="flex h-full flex-col justify-center gap-6">
            <h2 className="text-center text-xl font-semibold md:text-2xl">
              ورود / ثبت‌نام
            </h2>
            <p className="text-center text-sm leading-relaxed text-gray-600 md:text-base">
              کد تأیید به شماره موبایلی که وارد می‌کنید ارسال خواهد شد.
            </p>

            <div className="flex flex-col gap-3">
              <PhoneInput
                country={'ir'}
                enableAreaCodes={true}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: false,
                }}
                containerClass="!w-full"
                inputClass="!w-full !h-[48px] !text-sm !rounded-md !border-gray-300"
                buttonClass="!border-gray-300"
                dropdownClass="!text-sm"
              />

              <label className="flex items-center justify-end gap-2 text-right text-sm">
                <span>
                  با ورود و ثبت‌نام در سایت، با{' '}
                  <span className="text-blue-500">قوانین اتورنت</span> موافقت
                  می‌کنم
                </span>
                <input type="checkbox" className="accent-blue-500" />
              </label>

              <button className="rounded-md bg-blue-600 py-2 text-sm text-white transition hover:bg-blue-700 md:text-base">
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
